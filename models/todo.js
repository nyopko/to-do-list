module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("item", {
      text: {
          type: DataTypes.STRING,
          validate: {
              allowNull: false,
              notEmpty: true,
              len: [1, 140]
          }
        },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Item;
  };
  