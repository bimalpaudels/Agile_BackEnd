var multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
    destination: "./public/images/movie",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
});

const upload = multer({storage}).single("movie");

const upload_image = (req, res) => {
    upload(req, res, err => {
        if(err)
        {
            res.json({Status: false, message: err.message});
        }
        else
        {
            res.json(req.file);
        }
    })
}

module.exports = {
    upload_image
}