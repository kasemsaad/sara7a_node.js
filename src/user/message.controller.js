import messageModel from "../../db/message.model.js";
import userModel from "../../db/user.model.js";
import jwt from "jsonwebtoken"


export const addmessages=async(req,res)=>{
    // res.json({messge:"hoooooo"})
    let checkin=await userModel.findById(req.body.recievedId);
    if(!checkin)
    return res.json({messge:"user is not found"})
    let addmessage=await messageModel.insertMany(req.body);
    res.json({messge:"hoooooo",addmessage})

  }
 export const getmessages=(req,res)=>{
    console.log(req.body)
    jwt.verify(req.body.token,"hhhhhh", async function(err,decoded){
      console.log(decoded)
      let getmess=await messageModel.find({recievedId:decoded.id});
      console.log(getmess)

      res.json({messge:"done",getmess})
    })
    // let getmess=await messageModel.find({recievedId:req.params.param});
 
   

  }

// export default addmessages