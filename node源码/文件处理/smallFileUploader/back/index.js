import fs from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// 小坑 body默认是10M
app.use(express.json({ limit: "50mb" }));

// 文件路径存储
const UPLOAD_DIR = path.resolve("uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

app.post("/uploadBase64", (req, res) => {
  const { name, type, data } = req.body;
  if (!name || !data) {
    return res.status(400).json({ message: "缺少参数" });
  }

  const base64Data = data.replace(/^data:\w+\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");
  const safeName = path.basename(name);
  const filePath = path.join(UPLOAD_DIR, safeName);
  writeFile(filePath, buffer)
    .then(() => {
      console.log(`文件保存成功: ${filePath}`);
      res.status(200).json({ message: "上传成功", path: filePath });
    })
    .catch((err) => {
      console.error("文件保存失败:", err);
      res.status(500).json({ message: "上传失败" });
    });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
