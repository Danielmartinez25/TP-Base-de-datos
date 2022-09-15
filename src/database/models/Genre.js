module.exports = (sequelize, dataTypes) => {
  const alias = "Genre";
  const cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    ranking: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique : true
    },
    active: {
      type: dataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1",
    }
  };
  const config = {
    tableName: "Genre",
    timestamps: true,
    underscore: true
  };
  const Genre = sequelize.define(alias, cols, config);
  return Genre;
};
