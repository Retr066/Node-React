import express, { NextFunction, Request, Response } from  "express"
import cors from "cors"
import { ErrorHandler, handleError } from "./middlewares/errorHandler"
import router from "./routes/articleRoute"

const app = express()

app.use(cors())
app.use(express.json())
app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    handleError(err, req, res, next);
  });
app.use(router)

export default app;
