const express = require('express');
const sheetUtils = require('./db/modelsUtils/sheetUtils');

const router = express.Router();

router.post('/save', async (req, res) => {
  sheetUtils.dbWrite(req, res);
});

module.exports = router;
