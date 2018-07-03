module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    start: DataTypes.TIME,
    end: DataTypes.TIME,
    undergrads: DataTypes.SMALLINT,
    graduates: DataTypes.SMALLINT,
    location: DataTypes.STRING,
    audience: DataTypes.STRING
  });

  return Event;
};
