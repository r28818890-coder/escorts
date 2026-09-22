# Sentry Setup Instructions

## 1. Create Sentry Account
1. Go to [sentry.io](https://sentry.io)
2. Sign up for free account
3. Create new project: "Jaipur Spa Website"
4. Select: React + JavaScript

## 2. Get DSN (Data Source Name)
After creating project, you'll get:
```
https://your-dsn@sentry.io/project-id
```

## 3. Update Website Configuration
Replace the DSN in `utils/sentry.ts`:
```typescript
dsn: 'https://your-actual-dsn@sentry.io/project-id'
```

## 4. View Lead Data
In Sentry Dashboard:
1. Go to "Issues" tab
2. Filter by "New Lead Generated" messages
3. Click on any lead event to see complete data:
   - Phone number (complete)
   - Name
   - Location (City, State)
   - Timestamp
   - User agent
   - Source

## 5. Set Up Alerts
1. Go to "Settings" → "Alerts"
2. Create new alert rule
3. Trigger: "New Lead Generated" messages
4. Action: Send email notification
5. Get real-time lead notifications
