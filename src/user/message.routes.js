import express  from "express";
import {addmessages,getmessages} from "./message.controller.js";

const messageRoutes=express.Router();

messageRoutes.post("/addmessages", addmessages)
// messageRoutes.get("/getmessages/:param", getmessages)
messageRoutes.get("/getmessages/:param", getmessages)



export default messageRoutes