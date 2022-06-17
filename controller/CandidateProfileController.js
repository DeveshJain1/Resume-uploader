import candidateProfileMondal from "../models/CandidateProfile.js";

class CandidateProfileController {
     static saveProfile = async (req, res) => {
          try {
               const { name, email, dob, st, gender, pjl } = req.body
               const pimage = req.files['pimage'][0].filename
               const rdoc = req.files['rdoc'][0].filename
               if (name && email && pimage && rdoc) {
                    const doc = new candidateProfileMondal({
                         name: name,
                         email: email,
                         dob: dob,
                         state: st,
                         gender: gender,
                         location: pjl,
                         pimage: pimage,
                         rdoc: rdoc

                    })
                    const candidate = await doc.save();
                    res.status(201).send({ "Status": "Successful", "Message": "Profile Uploaded Successfully", "candidate": candidate })
               }
               else {
                    res.status(200).send({ "Status": "Failed", "Message": "All Fields are Required" })
               }


          } catch (error) {
               console.log(error)
          }


     }
     static profileList = async (req, res,cb)=>{
          try {
               
               const candidate = await candidateProfileMondal.find()
               res.status(200 ).send({ "Status": "Successful","candidate": candidate })
              
          } catch (error) {
               console.log(error)
               
          }
     }

}
export default CandidateProfileController;