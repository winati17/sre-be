import { Request } from "express";
import { db } from "../../../db/kysely";
import { InnovationPaperBody, PhotographyBody, StudyCaseBody } from "./types";

export const getAllInnovationPaper = async (req: Request) => {
  const result = await db.selectFrom('InnovationPaper').selectAll().execute();
  return result;
};

export const getAllStudyCase = async (req: Request) => {
  const result = await db.selectFrom('StudyCase').selectAll().execute();
  return result;
};

export const getAllPhotography = async (req: Request) => {
  const result = await db.selectFrom('Photography').selectAll().execute();
  return result;
};

export const createInnovationPaper = async (req: Request<any, any, InnovationPaperBody>) => {
  const { body } = req;
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const studentIdCard = files['studentIdCard'] ? files['studentIdCard'][0].filename : "";
  const proofOfUploadingFlyersOnIgStory = files['proofOfUploadingFlyersOnIgStory'] ? files['proofOfUploadingFlyersOnIgStory'][0].filename : "";
  const proofOfUploadingTwibbonOnIgFeed = files['proofOfUploadingTwibbonOnIgFeed'] ? files['proofOfUploadingTwibbonOnIgFeed'][0].filename : "";
  const proofOfSharingFlyers = files['proofOfSharingFlyer'] ? files['description'][0].filename : "";
  const originalitySheet = files['originalitySheet'] ? files['originalitySheet'][0].filename : "";
  const abstract = files['abstract'] ? files['abstract'][0].filename : "";

  const result = await db.insertInto('InnovationPaper').values({
    ...body,
    studentIdCard: 'uploads/' + studentIdCard,
    proofOfUploadingFlyersOnIgStory: 'uploads/' + proofOfUploadingFlyersOnIgStory,
    proofOfUploadingTwibbonOnIgFeed: 'uploads/' + proofOfUploadingTwibbonOnIgFeed,
    proofOfSharingFlyers: 'uploads/' + proofOfSharingFlyers,
    originalitySheet: 'uploads/' + originalitySheet,
    abstract: 'uploads/' + abstract,
  }).executeTakeFirst();
  
  return {
    ...body,
    studentIdCard: 'uploads/' + studentIdCard,
    proofOfUploadingFlyersOnIgStory: 'uploads/' + proofOfUploadingFlyersOnIgStory,
    proofOfUploadingTwibbonOnIgFeed: 'uploads/' + proofOfUploadingTwibbonOnIgFeed,
    proofOfSharingFlyers: 'uploads/' + proofOfSharingFlyers,
    originalitySheet: 'uploads/' + originalitySheet,
    abstract: 'uploads/' + abstract,
  }
};

export const createStudyCase = async (req: Request<any, any, StudyCaseBody>) => {
  const { body } = req;
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const studentIdCard = files['studentIdCard'] ? files['studentIdCard'][0].filename : "";
  const proofOfUploadingFlyersOnIgStory = files['proofOfUploadingFlyersOnIgStory'] ? files['proofOfUploadingFlyersOnIgStory'][0].filename : "";
  const proofOfUploadingTwibbonOnIgFeed = files['proofOfUploadingTwibbonOnIgFeed'] ? files['proofOfUploadingTwibbonOnIgFeed'][0].filename : "";
  const proofOfSharingFlyers = files['proofOfSharingFlyer'] ? files['description'][0].filename : "";

  const result = await db.insertInto('StudyCase').values({
    ...body,
    studentIdCard: 'uploads/' + studentIdCard,
    proofOfUploadingFlyersOnIgStory: 'uploads/' + proofOfUploadingFlyersOnIgStory,
    proofOfUploadingTwibbonOnIgFeed: 'uploads/' + proofOfUploadingTwibbonOnIgFeed,
    proofOfSharingFlyers: 'uploads/' + proofOfSharingFlyers,
  }).executeTakeFirst();

  return {
    ...body,
    studentIdCard: 'uploads/' + studentIdCard,
    proofOfUploadingFlyersOnIgStory: 'uploads/' + proofOfUploadingFlyersOnIgStory,
    proofOfUploadingTwibbonOnIgFeed: 'uploads/' + proofOfUploadingTwibbonOnIgFeed,
    proofOfSharingFlyers: 'uploads/' + proofOfSharingFlyers,
  }
};

export const createPhotography = async (req: Request<any, any, PhotographyBody>) => {
  const { body } = req;
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const paymentProof = files['paymentProof'] ? files['paymentProof'][0].filename : "";
  const photograph = files['photograph'] ? files['photograph'][0].filename : "";
  const description = files['description'] ? files['description'][0].filename : "";

  const result = await db.insertInto('Photography').values({
    ...body,
    paymentProof: 'uploads/' + paymentProof,
    photograph: 'uploads/' + photograph,
    description: 'uploads/' + description,
  }).executeTakeFirst();

  return {
    ...body,
    paymentProof: 'uploads/' + paymentProof,
    photograph: 'uploads/' + photograph,
    description: 'uploads/' + description,
  }
};

