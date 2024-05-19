import { Router } from "express";
import {
  indexInnovationPaper,
  indexPhotography,
  indexStudyCase,
  postInnovationPaper,
  postPhotography,
  postStudyCase
} from "./controller";

const router = Router();

router.get("/innovation-paper", indexInnovationPaper);
router.get("/study-case", indexStudyCase);
router.get("/photography", indexPhotography);

router.post("/innovation-paper", postInnovationPaper);
router.post("/study-case", postStudyCase);
router.post("/photography", postPhotography);

export default router;
