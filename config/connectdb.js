import mongoose from "mongoose";
const connectdb=  async (DATABASE_URL)=>{
     try {
          const DP_OPTIONS={
               dbName:'resumeuploader'
          }
          await mongoose.connect(DATABASE_URL,DP_OPTIONS)
          console.log(`DB connected successfully`)
     } catch (error) {
          console.log(error)
     }
}
export default connectdb