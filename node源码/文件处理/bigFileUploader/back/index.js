import { fileURLToPath } from "node:url";
import path from "node:path";

import express from "express";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
// const corsOptions = {
//   origin: [
//     "http://localhost:5501",
//     "http://localhost:5500",
//     "http://localhost:5502",
//     "http://localhost:5503",
//     "http://127.0.0.1:5501",
//     "http://127.0.0.1:5500",
//     "http://127.0.0.1:5502",
//     "http://127.0.0.1:5503",
//   ],
//   methods: ["POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "X-File-MD5"],
//   maxAge: 86400,
//   credentials: false,
// };

// app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-File-MD5");

  if (req.method === "OPTIONS") {
    res.status(204).end(); // 立即返回 204，无需继续处理
    return;
  }
  next();
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
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
