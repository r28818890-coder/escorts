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
      // Format header row
      newSheet.getRange('A1:K1').setFontWeight('bold').setBackground('#4285F4').setFontColor('white');
    }
    
    // Add new lead with formatting
    const timestamp = data.timestamp || new Date().toISOString();
    sheet.appendRow([
      timestamp,
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
    
    // Format new row
    const lastRow = sheet.getLastRow();
    sheet.getRange(`A${lastRow}`).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    sheet.getRange(`C${lastRow}`).setNumberFormat('[Red][=0]"-";[Red]##########'); // Phone format
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Lead saved successfully',
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'active',
    message: 'Jaipur Spa SPA Lead API is running',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
