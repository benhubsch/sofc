const express = require('express');
const models = require('./db/models');

const router = express.Router();

// YOUR API ROUTES HERE
router.post('/test', (req, res) => {
  // models.Sheet.create();
  res.send({ id: '123sdf9sdf1j30e90j' });
});

// SAMPLE ROUTE
router.get('/', (req, res) => {
  res.json({ success: true });
});

module.exports = router;
