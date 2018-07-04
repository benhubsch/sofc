const express = require('express');
const sheetUtils = require('./db/modelsUtils/sheetUtils');
const types = require('../client/actions/types');

const router = express.Router();

router.post('/sheet', async (req, res) => {
  switch (req.body.action.type) {
    case types.CELLS_CHANGE:
      sheetUtils.dbWrite(req, res);
      break;
    default:
      res.end();
  }
});

module.exports = router;
