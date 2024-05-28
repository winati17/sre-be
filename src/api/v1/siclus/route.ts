import { Router } from "express";
import {
  indexInnovationPaper,
  indexPhotography,
  indexStudyCase,
  postInnovationPaper,
  postPhotography,
  postStudyCase
} from "./controller";
import { upload } from "../../../middleware/multer";

const router = Router();

router.get("/innovation-paper", indexInnovationPaper);
router.get("/study-case", indexStudyCase);
router.get("/photography", indexPhotography);

router.post("/innovation-paper", upload.fields([{
  name: "studentIdCard",
  maxCount: 1,
},
{
  name: "proofOfUploadingFlyersOnIgStory",
  maxCount: 1,
},
{
  name: "proofOfUploadingTwibbonOnIgFeed",
  maxCount: 1,
},
{
  name: "proofOfSharingFlyers",
  maxCount: 1,
},
{
  name: "originalitySheet",
  maxCount: 1,
},
{
  name: "abstract",
  maxCount: 1,
}]), postInnovationPaper);
router.post("/study-case", upload.fields([{
  name: "studentIdCard",
  maxCount: 1,
},
{
  name: "proofOfUploadingFlyersOnIgStory",
  maxCount: 1,
},
{
  name: "proofOfUploadingTwibbonOnIgFeed",
  maxCount: 1,
},
{
  name: "proofOfSharingFlyers",
  maxCount: 1,
}]), postStudyCase);
router.post("/photography", upload.fields([{
  name: "paymentProof",
  maxCount: 1,
},
{
  name: "photograph",
  maxCount: 1,
},
{
  name: "description",
  maxCount: 1,
}]), postPhotography);

export default router;
