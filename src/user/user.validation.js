import Joi from "joi";

const signupSchema =Joi.object({
    name:Joi.string().alphanum().min(3).max(30).required(),
    email:Joi.string()
    .email({minDomainSegments:2, tlds:{allow:["com"]}}).required(),
    age:Joi.number(),
      password:Joi.string()
    .pattern(/^[A-z][a-z0-9]{3,8}$/).required(),
    passwordconfi:Joi.ref("password"),
  })
  const signinSchema =Joi.object({
    email:Joi.string()
    .email({minDomainSegments:2, tlds:{allow:["com"]}}).required(),
      password:Joi.string()
    .pattern(/^[A-z][a-z0-9]{3,8}$/).required(),
  })
  export{
    signupSchema,
    signinSchema
  }