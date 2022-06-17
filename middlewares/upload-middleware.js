import multer from "multer";
const upload = multer({
     storage:multer.diskStorage({
          destination: (req, file, cb)=>{
               cb(null,`public/uploads/${file.fieldname}`)
          }
          ,
          filename: (req, file,cb)=>{
               cb(null,`${Date.now()}-${file.originalname}`)
          }
     })

})
export default upload