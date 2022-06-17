import express  from "express";
const router =  express.Router();
import CandidateProfileController from "../controller/CandidateProfileController.js";
import upload from "../middlewares/upload-middleware.js"


// Multipart Form data
router.use(upload.fields([{name:'pimage',maxCount:1},{name:'rdoc',maxCount:1}]))
// Public Routes
router.post("/resume", CandidateProfileController.saveProfile) 
router.get("/list",CandidateProfileController.profileList)

export default router
