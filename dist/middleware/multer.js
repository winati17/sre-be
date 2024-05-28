"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const diskStorage = multer_1.default.diskStorage({
    // konfigurasi folder penyimpanan file
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    // konfigurasi penamaan file yang unik
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
exports.upload = (0, multer_1.default)({ storage: diskStorage });
