"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const multer_1 = require("../../../middleware/multer");
const router = (0, express_1.Router)();
router.get("/innovation-paper", controller_1.indexInnovationPaper);
router.get("/study-case", controller_1.indexStudyCase);
router.get("/photography", controller_1.indexPhotography);
router.post("/innovation-paper", multer_1.upload.fields([{
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
    }]), controller_1.postInnovationPaper);
router.post("/study-case", multer_1.upload.fields([{
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
    }]), controller_1.postStudyCase);
router.post("/photography", multer_1.upload.fields([{
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
    }]), controller_1.postPhotography);
exports.default = router;
