const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// - - - - - UNCOMMENT THIS FOR RAILWAY BUILD - - - - -
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.MYSQLDATABASE,
    process.env.MYSQLUSER,
    process.env.MYSQLPASSWORD,
    {
      host: process.env.MYSQLHOST,
      dialect: 'mysql',
      port: process.env.MYSQLPORT
    }
  );
}


// - - - - - UNCOMMENT THIS FOR LOCAL BUILD - - - - -
// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

module.exports = sequelize;
