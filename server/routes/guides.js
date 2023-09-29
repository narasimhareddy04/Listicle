import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import guideData from "../data/guides.js";
import GuidesController from "../controllers/guides.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", GuidesController.getGuides);

router.get("/:guideId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/guide.html"));
});

export default router;
