import { Router } from "express";
import { create, deleteQuizs, getQuizs, updateQuizs } from "../controllers/quiz.controller";


const quizRoute: Router = Router();

quizRoute.post("", create);

quizRoute.get("/:id", getQuizs); // Truy vấn thông tin dựa trên id
quizRoute.put("/:id", updateQuizs); // Cập nhật thông tin dựa trên id
quizRoute.delete("/:id", deleteQuizs); // Cập nhật thông tin dựa trên id

export default quizRoute;
