import userModel from "../../db/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { json } from "express";

export const signup = async(req, res) => {
if(req.body.password != req.body.passwordconfi)
return res.json({message:"password not confirm"})
    let checkEmail = await userModel.findOne({ email: req.body.email });
    console.log(checkEmail);

    if (checkEmail) {
      res.json("email is already found");
    } else {
        let hashpassword = bcrypt.hashSync(req.body.password, 10);
        let adduser = await userModel.insertMany({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: hashpassword

    });
        res.json({done:adduser});
    }
};

 export const signin=async(req,res)=>{
   let checkin=await userModel.findOne({ email:req.body.email});
   console.log(checkin);
   if(!checkin)
   return res.json({messge:"email is not found"})
let changhash=bcrypt.compareSync(req.body.password , checkin.password)
if(changhash){
  let token=jwt.sign({id:checkin._id,name:checkin.name},"hhhhhh") //hhhhh secrit key
  res.json({messge:"hello",token})
}else{
  res.json({messge:"passowrd not valid"})
}
}
export const  userdata=async(req,res)=>{
  jwt.verify(req.body.token,"hhhhhh", async function(err,decoded){
    let userdata=await userModel.findById(decoded.id);
     res.json({messge:"done",userdata})

  }) 
}


   export default signup 