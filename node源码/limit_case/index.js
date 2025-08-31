import express from "express";
import Redis from "ioredis";

import { readFileSync } from "node:fs";
const lua = readFileSync("./index.lua", "utf-8");

// 限流阀
const KEY = "lottery";
const MAX = 5;
const TIME = 30;

const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
});
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/lottery", (req, res) => {
  let content = "";
  redis.eval(lua, 1, KEY, MAX, TIME).then((shell) => {
    content = shell === 1 ? "恭喜中奖" : "请稍后再试";
    res.send(content);
  });
});

app.listen(3000, () => console.log("server is running"));
