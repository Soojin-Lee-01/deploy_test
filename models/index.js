"use strict";

const Sequelize = require("sequelize");
let config = require(__dirname + "/../config/config.js");
console.log(config);
config = config["development"];
console.log("config", config);
const db = {};


let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
// 설정 정보를 seqelize 라는 key안에 넣어주는 중
// {
//   sequelize: sequelize
// }

// sequelize 모듈을 Sequelize 라는 key안에 넣어주는 중
db.Sequelize = Sequelize;
// {
//   sequelize: sequelize,
//   Sequelize: Sequelize
// }

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// {
//   sequelize: sequelize,
//   Sequelize, Sequelize,
//   Visitor: visitor의 모델
// }


module.exports = db; // app.js