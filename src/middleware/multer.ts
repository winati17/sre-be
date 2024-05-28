import multer from "multer";
import path from "path";

const diskStorage = multer.diskStorage({
  // konfigurasi folder penyimpanan file
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
    // konfigurasi penamaan file yang unik
  filename: function (req, file, cb) {
    cb(
      null, Date.now() + '-' + file.originalname
    );
  },
});

export const upload = multer({storage: diskStorage});


