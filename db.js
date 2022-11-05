const {Sequelize} = require('sequelize');

module.exports = new Sequelize({
  database: "dd7ke131rbtatr",
  username: "xwlxwhzknexgwj",
  password: "0fc095bbc0586636a265cd61a07d4c7433ae5981e8e35b1ce644c088ca6e5a90",
  host: "ec2-99-81-137-11.eu-west-1.compute.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
});