import Joi from "joi";

export const messageSchema =Joi.object({
  messageText:Joi.string().min(10).max(500).required(),
recievedId:
   Joi.string().hex().length(24).required()

  })
