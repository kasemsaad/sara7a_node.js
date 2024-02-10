import userModel from "../../db/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
// import {signupSchema,signinSchema} from "./user.validation.js"
import sendemail from "../../utils/sendouremail.js";
import handlError from "../../utils/handleAsyncError.js";

  const signup =handlError( async(req, res) => {
  // let errors=signupSchema.validate(req.body,{abortEarly:false});
  // if(req.body.password != req.body.passwordconfi)
  // if(errors?.error){
  //  res.json({message:"validation error",details:errors?.error?.details})
  // }else{
  
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
    let token=jwt.sign
    ({
      id:[0]._id},"verfication",
    )
    sendemail(req.body.email,{url:`http://localhost:3000/user/verify/${token}`})
        res.json({done:adduser});
    // }
}})


  const signin=handlError(async(req,res)=>{
  // let errors=signinSchema.validate(req.body,{abortEarly:false});
  // if(errors?.error){
      // res.json({message:"validation error",details:errors?.error?.details})
    //  }else{
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
// }
})
 const userdata=handlError(async(req,res)=>{
  jwt.verify(req.body.token,"hhhhhh", async function(err,decoded){
    let userdata=await userModel.findById(decoded.id);
     res.json({messge:"done",userdata})

  }) 
})
 const veraccount=handlError(async(req,res)=>{
     res.json({messge:"hellooo"})

  })


   export { 
    signup 
    ,
    signin
    ,
    userdata 
    ,
    veraccount 
  }