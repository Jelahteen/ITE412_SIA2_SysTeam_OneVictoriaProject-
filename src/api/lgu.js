const express = require('express');
const router = express.Router();

let disasterAlerts = [
  { id: 1, type: 'Flood', location: 'Barangay 1', severity: 'High', status: 'Active' }
];

// GET /lgu → Retrieve all alerts
router.get('/', (req, res) => {
  res.json(disasterAlerts);
});

// GET /lgu/:id → Retrieve specific alert by ID
router.get('/:id', (req, res) => {
  const alertId = parseInt(req.params.id); // Convert ID to number
  const alert = disasterAlerts.find(a => a.id === alertId);

  if (!alert) {
    return res.status(404).json({ message: `Alert with ID ${alertId} not found` });
  }

  res.json(alert);
});

router.post('/', (req, res) => {
  console.log("Incoming Headers:", req.headers);
  console.log("Incoming Body:", req.body);

  const { type, location, severity, status } = req.body;

  // Validation
  if (!type || !location || !severity || !status) {
    return res.status(400).json({ message: 'All fields are required: type, location, severity, status' });
  }

  const newAlert = {
    id: disasterAlerts.length + 1,
    type,
    location,
    severity,
    status
  };

  disasterAlerts.push(newAlert);
  console.log("Updated Alerts:", disasterAlerts);

  res.status(201).json(newAlert);
});



// DELETE /lgu/:id → Delete a specific alert by ID
router.delete('/:id', (req, res) => {
  const alertId = parseInt(req.params.id); // Convert ID to number
  const index = disasterAlerts.findIndex(a => a.id === alertId);

  if (index === -1) {
    return res.status(404).json({ message: `Alert with ID ${alertId} not found` });
  }

  // Remove the alert
  const deletedAlert = disasterAlerts.splice(index, 1);

  res.json({
    message: `Alert with ID ${alertId} deleted successfully`,
    deleted: deletedAlert[0]
  });
});

module.exports = router;
