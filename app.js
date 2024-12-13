const express = require("express");
const db = require('./models');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

/* 미들웨어 설정 */
app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// 라우터 불러오기
const indexRouter = require("./routes");
app.use("/", indexRouter);

// 404 에러처리
app.get("*", (req, res)=> {
    res.render("404");
});

db.sequelize.sync({ force:false }).then((result)=>{
    console.log(result);
    console.log("DB 연결 성공");
    console.log("---------");

    // 포트열기
    app.listen(PORT , (req, res)=>{
        console.log(`http://localhost:${PORT}`);
    })
});

