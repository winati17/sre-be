import { Request, Response, NextFunction } from "express";
import {
  createInnovationPaper,
  createStudyCase,
  createPhotography,
  getAllInnovationPaper,
  getAllStudyCase,
  getAllPhotography,
} from "./service";

export const indexInnovationPaper = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getAllInnovationPaper(req);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const indexStudyCase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getAllStudyCase(req);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const indexPhotography = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getAllPhotography(req);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const postInnovationPaper = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await createInnovationPaper(req);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const postStudyCase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await createStudyCase(req);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const postPhotography = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await createPhotography(req);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

