import multer from "multer";


//middleware
const upload = multer({dest:'uploads'});

export default upload;