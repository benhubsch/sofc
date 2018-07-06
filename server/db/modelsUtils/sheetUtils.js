const models = require('../models');
const types = require('../../../client/actions/types');

const dbWrite = async (req, res) => {
  switch (req.body.action.type) {
    case types.ROW_CHANGE:
    case types.CELLS_CHANGE: {
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
  }
};

module.exports = {
  dbWrite
};
