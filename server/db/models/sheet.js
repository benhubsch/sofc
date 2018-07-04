module.exports = (sequelize, DataTypes) => {
  const Sheet = sequelize.define('Sheet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    sheet: DataTypes.JSON
  });

  return Sheet;
};
