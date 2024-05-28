"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhotography = exports.createStudyCase = exports.createInnovationPaper = exports.getAllPhotography = exports.getAllStudyCase = exports.getAllInnovationPaper = void 0;
const kysely_1 = require("../../../db/kysely");
const getAllInnovationPaper = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield kysely_1.db.selectFrom('InnovationPaper').selectAll().execute();
    return result;
});
exports.getAllInnovationPaper = getAllInnovationPaper;
const getAllStudyCase = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield kysely_1.db.selectFrom('StudyCase').selectAll().execute();
    return result;
});
exports.getAllStudyCase = getAllStudyCase;
const getAllPhotography = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield kysely_1.db.selectFrom('Photography').selectAll().execute();
    return result;
});
exports.getAllPhotography = getAllPhotography;
const createInnovationPaper = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const files = req.files;
    const studentIdCard = files['studentIdCard'] ? files['studentIdCard'][0].filename : "";
    const proofOfUploadingFlyersOnIgStory = files['proofOfUploadingFlyersOnIgStory'] ? files['proofOfUploadingFlyersOnIgStory'][0].filename : "";
    const proofOfUploadingTwibbonOnIgFeed = files['proofOfUploadingTwibbonOnIgFeed'] ? files['proofOfUploadingTwibbonOnIgFeed'][0].filename : "";
    const proofOfSharingFlyers = files['proofOfSharingFlyer'] ? files['description'][0].filename : "";
    const originalitySheet = files['originalitySheet'] ? files['originalitySheet'][0].filename : "";
    const abstract = files['abstract'] ? files['abstract'][0].filename : "";
    const result = yield kysely_1.db.insertInto('InnovationPaper').values(Object.assign(Object.assign({}, body), { studentIdCard: 'uploads/' + studentIdCard, proofOfUploadingFlyersOnIgStory: 'uploads/' + proofOfUploadingFlyersOnIgStory, proofOfUploadingTwibbonOnIgFeed: 'uploads/' + proofOfUploadingTwibbonOnIgFeed, proofOfSharingFlyers: 'uploads/' + proofOfSharingFlyers, originalitySheet: 'uploads/' + originalitySheet, abstract: 'uploads/' + abstract })).executeTakeFirst();
    return Object.assign(Object.assign({}, body), { studentIdCard: 'uploads/' + studentIdCard, proofOfUploadingFlyersOnIgStory: 'uploads/' + proofOfUploadingFlyersOnIgStory, proofOfUploadingTwibbonOnIgFeed: 'uploads/' + proofOfUploadingTwibbonOnIgFeed, proofOfSharingFlyers: 'uploads/' + proofOfSharingFlyers, originalitySheet: 'uploads/' + originalitySheet, abstract: 'uploads/' + abstract });
});
exports.createInnovationPaper = createInnovationPaper;
const createStudyCase = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const files = req.files;
    const studentIdCard = files['studentIdCard'] ? files['studentIdCard'][0].filename : "";
    const proofOfUploadingFlyersOnIgStory = files['proofOfUploadingFlyersOnIgStory'] ? files['proofOfUploadingFlyersOnIgStory'][0].filename : "";
    const proofOfUploadingTwibbonOnIgFeed = files['proofOfUploadingTwibbonOnIgFeed'] ? files['proofOfUploadingTwibbonOnIgFeed'][0].filename : "";
    const proofOfSharingFlyers = files['proofOfSharingFlyer'] ? files['description'][0].filename : "";
    const result = yield kysely_1.db.insertInto('StudyCase').values(Object.assign(Object.assign({}, body), { studentIdCard: 'uploads/' + studentIdCard, proofOfUploadingFlyersOnIgStory: 'uploads/' + proofOfUploadingFlyersOnIgStory, proofOfUploadingTwibbonOnIgFeed: 'uploads/' + proofOfUploadingTwibbonOnIgFeed, proofOfSharingFlyers: 'uploads/' + proofOfSharingFlyers })).executeTakeFirst();
    return Object.assign(Object.assign({}, body), { studentIdCard: 'uploads/' + studentIdCard, proofOfUploadingFlyersOnIgStory: 'uploads/' + proofOfUploadingFlyersOnIgStory, proofOfUploadingTwibbonOnIgFeed: 'uploads/' + proofOfUploadingTwibbonOnIgFeed, proofOfSharingFlyers: 'uploads/' + proofOfSharingFlyers });
});
exports.createStudyCase = createStudyCase;
const createPhotography = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const files = req.files;
    const paymentProof = files['paymentProof'] ? files['paymentProof'][0].filename : "";
    const photograph = files['photograph'] ? files['photograph'][0].filename : "";
    const description = files['description'] ? files['description'][0].filename : "";
    const result = yield kysely_1.db.insertInto('Photography').values(Object.assign(Object.assign({}, body), { paymentProof: 'uploads/' + paymentProof, photograph: 'uploads/' + photograph, description: 'uploads/' + description })).executeTakeFirst();
    return Object.assign(Object.assign({}, body), { paymentProof: 'uploads/' + paymentProof, photograph: 'uploads/' + photograph, description: 'uploads/' + description });
});
exports.createPhotography = createPhotography;
