export const validation=(signSchema)=>{
    return(req,res,next)=>{
        let errors=signSchema.validate(req.body,{abortEarly:false});
        if(errors?.error){
            res.json({message:"Error",details:errors?.error?.details})
        }else{
        next()
        }      


    }
}
