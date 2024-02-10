import express  from "express";

import {addmessages,getmessages} from "./message.controller.js";
import {messageSchema} from "./message.validation.js"
import { validation } from "../../middleware/validation.js";

const messageRoutes=express.Router();
messageRoutes.post("/addmessages",validation(messageSchema), addmessages)
// messageRoutes.get("/getmessages/:param", getmessages)
messageRoutes.get("/getmessages/:param", getmessages)



export default messageRoutes