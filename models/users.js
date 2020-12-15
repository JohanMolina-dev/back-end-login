//Creacion de modelo usuario, solo lleva los campos de la tabla

module.exports = (sequelize, type) => {
  return sequelize.define("usuario", {
    // Model attributes are defined here
    id: {
      type: type.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: type.STRING,
    email: type.STRING,
    password: type.STRING,
    rol: type.STRING,
  });
};
