import express  from "express";
import {signup,signin,userdata,veraccount}  from "./user.controller.js";
import { signupSchema,signinSchema } from "./user.validation.js";
import {validation} from "../../middleware/validation.js";
const userRoutes=express.Router();

userRoutes.post("/signup",validation(signupSchema),signup)

userRoutes.post("/signin",validation(signinSchema),signin)

userRoutes.get("/user",userdata)
userRoutes.get("/user/verify/:token",veraccount)


export default userRoutes