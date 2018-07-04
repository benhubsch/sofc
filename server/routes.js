const express = require('express');
const models = require('./db/models');

const router = express.Router();

router.post('/test', async (req, res) => {
  const sheet = await models.Sheet.findById(req.body.id);
  if (sheet) {
    await sheet.update({ sheet: JSON.stringify(req.body.sheet) });
    res.send({ id: sheet.id });
  } else {
    const newSheet = await models.Sheet.create({
      sheet: JSON.stringify(req.body.sheet)
    });
    res.send({ id: newSheet.id });
  }
});

module.exports = router;
