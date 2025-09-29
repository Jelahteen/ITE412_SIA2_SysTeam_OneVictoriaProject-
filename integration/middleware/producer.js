const { enqueue } = require('./queue');

// Simulate LGU sending alerts
function sendAlert(alertType, location, severity) {
  const message = {
    id: Date.now(),
    type: alertType,
    location,
    severity,
    timestamp: new Date().toISOString()
  };

  console.log(`LGU Alert Submitted: ${alertType} at ${location} (${severity})`);
  enqueue(message);
}

// Example run
sendAlert("Flood", "Barangay 1", "High");
sendAlert("Fire", "Barangay 2", "Moderate");
sendAlert("Earthquake", "Barangay 3", "Critical");
