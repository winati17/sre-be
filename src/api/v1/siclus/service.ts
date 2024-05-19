import { Request } from "express";
import { db } from "./../../../db/postgre";
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
  const result = await db.insertInto('InnovationPaper').values({
    ...body,
    studentIdCard: "/public/storage/studentIdCard.pdf",
    proofOfUploadingFlyersOnIgStory: "/public/storage/proofOfUploadingFlyersOnIgStory.pdf",
    proofOfUploadingTwibbonOnIgFeed: "/public/storage/proofOfUploadingTwibbonOnIgFeed.pdf",
    proofOfSharingFlyers: "/public/storage/proofOfSharingFlyers.pdf",
    originalitySheet: "/public/storage/originalitySheet.pdf",
    abstract: "/public/storage/abstract.pdf",
  }).returningAll().executeTakeFirst();
  return result;
};

export const createStudyCase = async (req: Request<any, any, StudyCaseBody>) => {
  const { body } = req;
  const result = await db.insertInto('StudyCase').values({
    ...body,
    studentIdCard: "/public/storage/studentIdCard.pdf",
    proofOfUploadingFlyersOnIgStory: "/public/storage/proofOfUploadingFlyersOnIgStory.pdf",
    proofOfUploadingTwibbonOnIgFeed: "/public/storage/proofOfUploadingTwibbonOnIgFeed.pdf",
    proofOfSharingFlyers: "/public/storage/proofOfSharingFlyers.pdf",
  }).returningAll().executeTakeFirst();
  return result;
};

export const createPhotography = async (req: Request<any, any, PhotographyBody>) => {
  const { body } = req;
  const result = await db.insertInto('Photography').values({
    ...body,
    paymentProof: "/public/storage/paymentProof.pdf",
    photograph: "/public/storage/photograph.pdf",
    description: "/public/storage/description.pdf",
  }).returningAll().executeTakeFirst();
  return result;
};