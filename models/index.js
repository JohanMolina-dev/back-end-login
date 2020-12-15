const Sequelize = require ('sequelize');
const UserModel = require('./users');
//conexion base de datos
const sequelize = new Sequelize('IciiwHgaLZ', 'IciiwHgaLZ', 'hi6SIDBo6V', {
    host: 'remotemysql.com',
    port: '3306',
    dialect:'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });


//instancia de Usermodel la instancia va en minuscula y el tipo va en mayuscula
const User = UserModel (sequelize, Sequelize);

//sincronizacion de Sequelize

sequelize.sync({force: false})
.then(()=>{
    console.log('tablas sincronizadas')
}
);

module.exports={
    User
}

