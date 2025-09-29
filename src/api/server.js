const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Import routes
const lguRoutes = require('./lgu');
const volunteerRoutes = require('./volunteers');

// Define base routes
app.use('/lgu', lguRoutes);
app.use('/volunteers', volunteerRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
