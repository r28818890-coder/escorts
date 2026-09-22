<?php
/**
 * Hostinger Internal Analytics Stats Endpoint
 * Provides aggregated analytics data filtered by Today, Yesterday, 7 Days, Month, and Custom range.
 * Protected by secret Admin PIN.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Admin-Pin');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

date_default_timezone_set('Asia/Kolkata');

// Admin PIN verification (Password: Sadd@1111)
$CORRECT_PIN = 'Sadd@1111';
$providedPin = $_REQUEST['pin'] ?? $_SERVER['HTTP_X_ADMIN_PIN'] ?? '';

// Check JSON body if POST
if (empty($providedPin)) {
    $body = json_decode(file_get_contents('php://input'), true);
    $providedPin = $body['pin'] ?? '';
    $range = $body['range'] ?? $_GET['range'] ?? 'today';
    $startDate = $body['startDate'] ?? $_GET['startDate'] ?? '';
    $endDate = $body['endDate'] ?? $_GET['endDate'] ?? '';
} else {
    $range = $_GET['range'] ?? $_POST['range'] ?? 'today';
    $startDate = $_GET['startDate'] ?? $_POST['startDate'] ?? '';
    $endDate = $_GET['endDate'] ?? $_POST['endDate'] ?? '';
}

if ($providedPin !== $CORRECT_PIN) {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Invalid Secret Admin Password']);
    exit;
}

$dataDir = __DIR__ . '/data';
$dbPath = $dataDir . '/analytics.db';
$jsonPath = $dataDir . '/events.json';

// Calculate Date Range Boundaries
$today = new DateTime();
$todayStr = $today->format('Y-m-d');

$yesterday = (clone $today)->modify('-1 day');
$yesterdayStr = $yesterday->format('Y-m-d');

$sevenDaysAgo = (clone $today)->modify('-6 days');
$sevenDaysStr = $sevenDaysAgo->format('Y-m-d');

$monthStart = (clone $today)->modify('-29 days');
$monthStartStr = $monthStart->format('Y-m-d');

$filterStart = $todayStr;
$filterEnd = $todayStr;

switch ($range) {
    case 'yesterday':
        $filterStart = $yesterdayStr;
        $filterEnd = $yesterdayStr;
        break;
    case '7days':
        $filterStart = $sevenDaysStr;
        $filterEnd = $todayStr;
        break;
    case 'month':
        $filterStart = $monthStartStr;
        $filterEnd = $todayStr;
        break;
    case 'custom':
        $filterStart = !empty($startDate) ? $startDate : $sevenDaysStr;
        $filterEnd = !empty($endDate) ? $endDate : $todayStr;
        break;
    case 'today':
    default:
        $range = 'today';
        $filterStart = $todayStr;
        $filterEnd = $todayStr;
        break;
}

$events = [];

// Fetch from SQLite if exists
if (file_exists($dbPath) && extension_loaded('pdo_sqlite')) {
    try {
        $pdo = new PDO('sqlite:' . $dbPath);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $pdo->prepare("SELECT * FROM analytics_events WHERE date_str >= ? AND date_str <= ? ORDER BY id DESC");
        $stmt->execute([$filterStart, $filterEnd]);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($rows as $r) {
            $events[] = [
                'id' => $r['id'],
                'timestamp' => $r['timestamp'],
                'date' => $r['date_str'],
                'hour' => (int)$r['hour'],
                'event_type' => $r['event_type'],
                'page' => $r['page'],
                'source' => $r['source'],
                'device' => $r['device'],
                'ip_hash' => $r['ip_hash'],
                'locality' => $r['locality']
            ];
        }
    } catch (Exception $e) {
        $events = [];
    }
}

// Fallback to JSON if SQLite empty/unavailable
if (empty($events) && file_exists($jsonPath)) {
    $allJson = json_decode(file_get_contents($jsonPath), true) ?: [];
    foreach ($allJson as $r) {
        $rDate = $r['date'] ?? substr($r['timestamp'] ?? '', 0, 10);
        if ($rDate >= $filterStart && $rDate <= $filterEnd) {
            $events[] = $r;
        }
    }
}

// Calculate Aggregated Metrics
$totalVisits = 0;
$uniqueIps = [];
$totalWhatsApp = 0;
$waLine1 = 0;
$waLine2 = 0;
$totalCalls = 0;
$deviceCounts = ['Mobile' => 0, 'Desktop' => 0];
$pageCounts = [];
$localityCounts = [];
$timelineMap = [];

// Initialize Timeline range
$period = new DatePeriod(
    new DateTime($filterStart),
    new DateInterval('P1D'),
    (new DateTime($filterEnd))->modify('+1 day')
);

foreach ($period as $dt) {
    $d = $dt->format('Y-m-d');
    $timelineMap[$d] = [
        'date' => $d,
        'displayDate' => $dt->format('d M'),
        'visits' => 0,
        'unique' => 0,
        'whatsapp' => 0,
        'calls' => 0,
        'unique_ips' => []
    ];
}

foreach ($events as $ev) {
    $type = $ev['event_type'] ?? 'pageview';
    $ip = $ev['ip_hash'] ?? 'anon';
    $dev = $ev['device'] ?? 'Mobile';
    $p = $ev['page'] ?? '/';
    $src = $ev['source'] ?? '';
    $d = $ev['date'] ?? substr($ev['timestamp'] ?? '', 0, 10);
    $loc = $ev['locality'] ?? '';

    $deviceCounts[$dev] = ($deviceCounts[$dev] ?? 0) + 1;

    if ($type === 'pageview') {
        $totalVisits++;
        $uniqueIps[$ip] = true;
        $pageCounts[$p] = ($pageCounts[$p] ?? 0) + 1;
        if (!empty($loc)) {
            $localityCounts[$loc] = ($localityCounts[$loc] ?? 0) + 1;
        }

        if (isset($timelineMap[$d])) {
            $timelineMap[$d]['visits']++;
            $timelineMap[$d]['unique_ips'][$ip] = true;
        }
    } elseif ($type === 'whatsapp' || $type === 'whatsapp_click') {
        $totalWhatsApp++;
        if (strpos($src, 'line2') !== false || strpos($src, '917357678349') !== false) {
            $waLine2++;
        } else {
            $waLine1++;
        }

        if (isset($timelineMap[$d])) {
            $timelineMap[$d]['whatsapp']++;
        }
    } elseif ($type === 'call' || $type === 'call_click' || $type === 'phone_call_click') {
        $totalCalls++;
        if (isset($timelineMap[$d])) {
            $timelineMap[$d]['calls']++;
        }
    }
}

$uniqueVisitors = count($uniqueIps);
$totalLeads = $totalWhatsApp + $totalCalls;
$conversionRate = $totalVisits > 0 ? round(($totalLeads / $totalVisits) * 100, 1) : 0;

// Format Timeline
$timeline = [];
foreach ($timelineMap as $d => $val) {
    $val['unique'] = count($val['unique_ips']);
    unset($val['unique_ips']);
    $timeline[] = $val;
}

// Sort Top Pages
arsort($pageCounts);
$topPages = [];
$i = 0;
foreach ($pageCounts as $page => $count) {
    if ($i++ >= 8) break;
    $topPages[] = ['page' => $page, 'count' => $count];
}

// Recent Activity Log (Last 30 Events)
$recentEvents = array_slice(array_reverse($events), 0, 30);

echo json_encode([
    'success' => true,
    'range' => $range,
    'filterStart' => $filterStart,
    'filterEnd' => $filterEnd,
    'generatedAt' => date('Y-m-d H:i:s'),
    'summary' => [
        'totalVisits' => $totalVisits,
        'uniqueVisitors' => $uniqueVisitors,
        'totalWhatsApp' => $totalWhatsApp,
        'waLine1' => $waLine1,
        'waLine2' => $waLine2,
        'totalCalls' => $totalCalls,
        'totalLeads' => $totalLeads,
        'conversionRate' => $conversionRate . '%'
    ],
    'devices' => $deviceCounts,
    'topPages' => $topPages,
    'timeline' => $timeline,
    'recentEvents' => $recentEvents
]);
