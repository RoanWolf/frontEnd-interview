import path from "node:path";
import fs from "node:fs/promises";

import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request body

const uploadsDir = path.join(process.cwd(), "uploads");
const chunksDir = path.join(uploadsDir, "_chunks");

// Ensure directories exist
async function ensureDirectories() {
  try {
    await fs.mkdir(uploadsDir, { recursive: true });
    await fs.mkdir(chunksDir, { recursive: true });
  } catch (err) {
    console.error("Failed to create directories:", err);
  }
}
ensureDirectories();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, chunksDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // e.g., "originalFileName-index"
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("partFile"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ code: 400, message: "No file part provided" });
  }
  console.log(`Chunk ${req.body.index} uploaded for ${req.body.fileName}`);
  res.json({ code: 200, message: "Chunk uploaded successfully" });
});


app.listen(3000, () => console.log("Server is running on port 3000"));