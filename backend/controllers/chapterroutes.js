import express from "express";
import { getChapter } from "../services/chapterServices.js";

const router = express.Router("/");

router.route("/:id").get(getChapter);

export default router;
