const Sequelize = require("sequelize");
const db = require("../config/database");
const jwt = require("jsonwebtoken");

const Users = db.define("users", {
   first_name: Sequelize.STRING,
   last_name: Sequelize.STRING,
   email: Sequelize.STRING,
   password: {
      type: Sequelize.STRING,
      set(value) {
         this.setDataValue("password", bcrypt.hashSync(value, 10));
      }
   }
});
