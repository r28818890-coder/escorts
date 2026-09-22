# Google Sheets Setup Instructions

## 1. Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
    
    // Create sheet if doesn't exist
    if (!sheet) {
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');
      newSheet.appendRow([
        'Timestamp', 'Name', 'Phone', 'Email', 'Source', 
        'City', 'State', 'Country', 'Service', 'UserAgent', 'Referrer'
      ]);
    }
    
    // Add new lead
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.source || '',
      data.city || '',
      data.state || '',
      data.country || '',
      data.service || '',
      data.userAgent || '',
      data.referrer || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2. Deploy as Web App
1. Click "Deploy" → "New Deployment"
2. Type: Web App
4. Description: Jaipur Spa SPA Lead Capture
4. Execute as: Me
5. Who has access: Anyone
6. Click "Deploy"
7. Copy the Web App URL
8. Update this URL in your website's API configuration

## 3. Update Website Configuration
Replace the script ID in `utils/api.ts`:
```typescript
SCRIPT_ID: 'YOUR_NEW_SCRIPT_ID_HERE'
```

## 4. Test the Integration
1. Submit a test lead from your website
2. Check Google Sheet for new entry
3. Verify all data fields are populated
