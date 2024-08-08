import { Request, Response, NextFunction } from 'express';
import Article from '../models/articleModel';
import { ErrorHandler } from '../middlewares/errorHandler';

const getArticles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ articles });
  } catch (error) {
    console.log(error)
    next(new ErrorHandler(400, 'Failed to fetch articles' ));
  }
};

export { getArticles };
