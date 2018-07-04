module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    fundcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emails: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    contacts: DataTypes.ARRAY(DataTypes.STRING)
  });

  return Organization;
};
