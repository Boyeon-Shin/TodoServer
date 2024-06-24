import express from "express";
// import todoRouter from "./todo/todo.router.js";

import todoRouterRdb from "./todo/todo.router.rdb.js";

import path from "path";

import cors from "cors";
import {TodoData} from "./todo/todo.data.js";
import {RdbmsConfig} from "./configure/rdbms.config.js";
import * as https from "node:https";
import * as fs from "node:fs";

// TodoData.initialize();
RdbmsConfig.initialize();

const app = express();
app.set('port' ,process.env.PORT || 3001);

app.use(express.json());
app.use(cors());

const options = {
    // tls: {
        key: fs.readFileSync('resource/cert/privkey.pem'),
        cert: fs.readFileSync('resource/cert/fullchain.pem')
    // }
};

app.get('/' , (req, res) => {
    res.send('Hello, Express');
});

https.createServer(options, app).listen(app.get('port'), () => {
    console.log( app.get('port'), '번에서 대기중');
});

// app.use('/todo', todoRouter);

app.use('/todo' , todoRouterRdb);


// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기중');
// });