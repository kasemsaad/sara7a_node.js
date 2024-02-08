import express  from "express";
import {signup,signin,userdata}  from "./user.controller.js";
const userRoutes=express.Router();

userRoutes.post("/signup",signup)

userRoutes.post("/signin",signin)

userRoutes.get("/user",userdata)


export default userRoutes