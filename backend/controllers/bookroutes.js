import express from "express";
import { getBooks } from "../services/bookServices.js";
const router = express.Router();

router.route("/").get(getBooks);

export default router;
