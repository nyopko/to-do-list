module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("item", {
      text: {
          type: DataTypes.STRING,
          validate: {
              notEmpty: true
          }
        },
      complete: DataTypes.BOOLEAN
    });
    return Item;
  };
  