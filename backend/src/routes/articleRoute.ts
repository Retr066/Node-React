import { Router } from "express";
import { getArticles } from "../controllers/articleController";

const router = Router()

router.get('/articles', getArticles)

export default router
