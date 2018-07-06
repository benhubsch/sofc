const express = require('express');
const sheetUtils = require('./db/modelsUtils/sheetUtils');
const organizationUtils = require('./db/modelsUtils/organizationUtils');

const router = express.Router();

router.post('/sheet', async (req, res) => {
  sheetUtils.dbWrite(req, res);
});

router.post('/organization', async (req, res) => {
  organizationUtils.dbWrite(req, res);
});

module.exports = router;
