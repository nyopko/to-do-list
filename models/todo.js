module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("item", {
      text: {
          type: DataTypes.STRING,
          validate: {
              notEmpty: true,
              len: [1, 140]
          }
        },
      complete: DataTypes.BOOLEAN
    });
    return Item;
  };
  