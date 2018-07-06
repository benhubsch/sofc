const models = require('../models');
const types = require('../../../client/actions/types');

const dbWrite = async (req, res) => {
  switch (req.body.action.type) {
    case types.ADD_CONTACTS:
    case types.REMOVE_CONTACTS:
    case types.REMOVE_EMAILS:
    case types.ADD_EMAILS:
    case types.SELECT_GROUP:
    case types.FUNDCODE_CHANGE: {
      const organization = await models.Organization.findById(req.body.id);
      if (organization) {
        await organization.update({
          emails: req.body.emails,
          contacts: req.body.contacts,
          fundcode: req.body.fundcode,
          name: req.body.name
        });
        res.send({ id: organization.id });
      } else {
        const newOrganization = await models.Organization.create({
          emails: req.body.emails,
          contacts: req.body.contacts,
          fundcode: req.body.fundcode,
          name: req.body.name
        });
        res.send({ id: newOrganization.id });
      }
      break;
    }
    default:
      res.end();
  }
};

module.exports = {
  dbWrite
};
