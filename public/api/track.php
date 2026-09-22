<?php
/**
 * Hostinger Internal Analytics Tracker
 * Handles zero-API background event tracking for Pageviews, Calls, and WhatsApp clicks.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure data directory exists
$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
    // Secure data directory from public HTTP indexing
    @file_put_contents($dataDir . '/.htaccess', "Deny from all\n");
}

$dbPath = $dataDir . '/analytics.db';
$jsonPath = $dataDir . '/events.json';

// Get payload
$rawInput = file_get_contents('php://input');
$payload = json_decode($rawInput, true);

if (!$payload || !isset($payload['event'])) {
    // Check GET params fallback
    $event = $_GET['event'] ?? 'pageview';
    $page = $_GET['page'] ?? '/';
    $source = $_GET['source'] ?? 'direct';
    $locality = $_GET['locality'] ?? '';
} else {
    $event = $payload['event'] ?? 'pageview';
    $page = $payload['page'] ?? '/';
    $source = $payload['source'] ?? 'direct';
    $locality = $payload['locality'] ?? '';
}

// Extract metadata
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$ipHash = substr(hash('sha256', $ip . 'JaipurSpaSalt2026'), 0, 16);
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
$isMobile = (bool)preg_match('/(android|iphone|ipad|ipod|mobile)/i', $userAgent);
$device = $isMobile ? 'Mobile' : 'Desktop';

// Set Indian Standard Time (IST)
date_default_timezone_set('Asia/Kolkata');
$now = new DateTime();
$timestamp = $now->format('Y-m-d H:i:s');
$dateStr = $now->format('Y-m-d');
$hour = $now->format('H');

$eventRecord = [
    'id' => uniqid('ev_', true),
    'timestamp' => $timestamp,
    'date' => $dateStr,
    'hour' => (int)$hour,
    'event_type' => $event,
    'page' => substr(htmlspecialchars($page), 0, 255),
    'source' => substr(htmlspecialchars($source), 0, 100),
    'device' => $device,
    'ip_hash' => $ipHash,
    'locality' => substr(htmlspecialchars($locality), 0, 100)
];

// Try SQLite (Fastest and standard on Hostinger)
$sqliteSaved = false;
if (extension_loaded('pdo_sqlite')) {
    try {
        $pdo = new PDO('sqlite:' . $dbPath);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Auto-create table if not exists
        $pdo->exec("CREATE TABLE IF NOT EXISTS analytics_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp DATETIME,
            date_str TEXT,
            hour INTEGER,
            event_type TEXT,
            page TEXT,
            source TEXT,
            device TEXT,
            ip_hash TEXT,
            locality TEXT
        )");
        
        $pdo->exec("CREATE INDEX IF NOT EXISTS idx_date ON analytics_events(date_str)");
        $pdo->exec("CREATE INDEX IF NOT EXISTS idx_type ON analytics_events(event_type)");

        $stmt = $pdo->prepare("INSERT INTO analytics_events (timestamp, date_str, hour, event_type, page, source, device, ip_hash, locality) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $timestamp,
            $dateStr,
            (int)$hour,
            $event,
            $eventRecord['page'],
            $eventRecord['source'],
            $device,
            $ipHash,
            $eventRecord['locality']
        ]);
        $sqliteSaved = true;
    } catch (Exception $e) {
        $sqliteSaved = false;
    }
}

// Fallback to rotating JSON file if SQLite unavailable
if (!$sqliteSaved) {
    $existing = [];
    if (file_exists($jsonPath)) {
        $existing = json_decode(file_get_contents($jsonPath), true) ?: [];
    }
    // Keep last 10,000 events to prevent file bloat
    if (count($existing) > 10000) {
        $existing = array_slice($existing, -9000);
    }
    $existing[] = $eventRecord;
    @file_put_contents($jsonPath, json_encode($existing), LOCK_EX);
}

echo json_encode(['success' => true, 'event' => $event, 'timestamp' => $timestamp]);
