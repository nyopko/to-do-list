module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("item", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Item;
  };
  