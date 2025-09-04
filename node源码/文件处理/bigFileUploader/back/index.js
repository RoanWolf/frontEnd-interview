import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  maxAge: 86400,
  credentials: false,
};

app.use(cors(corsOptions));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post("/file", upload.single("file"), (req, res) => {
  if (req.file) {
    res.send("ok");
  } else {
    res.send("error");
  }
});
 
app.listen(3000, () => {
  console.log("ok");
});
