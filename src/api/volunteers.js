const express = require('express');
const router = express.Router();

let volunteerReports = [
  { id: 1, volunteerName: 'John Doe', task: 'Relief Distribution', status: 'Completed' }
];

// GET /volunteers → Retrieve all volunteer reports
router.get('/', (req, res) => {
  res.json(volunteerReports);
});

// POST /volunteers → Create a new volunteer report
router.post('/', (req, res) => {
  const { volunteerName, task, status } = req.body;
  const newReport = {
    id: volunteerReports.length + 1,
    volunteerName,
    task,
    status
  };
  volunteerReports.push(newReport);
  res.status(201).json(newReport);
});

module.exports = router;
