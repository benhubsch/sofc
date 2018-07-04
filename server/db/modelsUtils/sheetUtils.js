const models = require('../models');

const dbWrite = async (req, res) => {
  switch (req.body.action.type) {
    case 'CELLS_CHANGE': {
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
      break;
    }
    default:
      res.send();
  }
};

module.exports = {
  dbWrite
};
