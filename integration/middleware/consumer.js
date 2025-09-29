const { dequeue, size } = require('./queue');

function processAlerts() {
  console.log("Volunteer Module waiting for alerts...");

  setInterval(() => {
    if (size() > 0) {
      const alert = dequeue();
      console.log(`Volunteer responding to alert: ${alert.type} at ${alert.location} [Severity: ${alert.severity}]`);
    } else {
      console.log("No new alerts at the moment...");
    }
  }, 2000); // check queue every 2 seconds
}

// Start processing
processAlerts();
