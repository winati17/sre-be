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
exports.postPhotography = exports.postStudyCase = exports.postInnovationPaper = exports.indexPhotography = exports.indexStudyCase = exports.indexInnovationPaper = void 0;
const service_1 = require("./service");
const indexInnovationPaper = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_1.getAllInnovationPaper)(req);
        res.status(200).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.indexInnovationPaper = indexInnovationPaper;
const indexStudyCase = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_1.getAllStudyCase)(req);
        res.status(200).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.indexStudyCase = indexStudyCase;
const indexPhotography = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_1.getAllPhotography)(req);
        res.status(200).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.indexPhotography = indexPhotography;
const postInnovationPaper = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_1.createInnovationPaper)(req);
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.postInnovationPaper = postInnovationPaper;
const postStudyCase = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_1.createStudyCase)(req);
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.postStudyCase = postStudyCase;
const postPhotography = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_1.createPhotography)(req);
        res.status(201).json({ data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.postPhotography = postPhotography;
