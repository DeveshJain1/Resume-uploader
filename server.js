import  dotenv  from "dotenv";
dotenv.config()
import express  from "express";
import cors from 'cors'
import connectdb from "./config/connectdb.js";
import CandidateRoutes from "./routes/CandidateRoutes.js"
import upload from "./middlewares/upload-middleware.js";
// Initialization
const app= express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL
// CORS POLICY
app.use(cors())
// DB CONNECT
connectdb(DATABASE_URL)
// JSON
app.use(express.json())
// Load Routes
app.use('/api',CandidateRoutes)
// PORT
app.listen(port,()=>{
console.log(`Server is active at http://127.0.0.1:${port}`)
})