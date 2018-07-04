module.exports = (sequelize, DataTypes) => {
  const Cell = sequelize.define('Cell', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    readOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    value: DataTypes.STRING,
    margin: DataTypes.BOOLEAN,
    left: DataTypes.BOOLEAN,
    className: {
      type: DataTypes.STRING,
      allowNull: true
    },
    expr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    key: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Cell;
};
