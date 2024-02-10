let handlError = (handel) =>{

    return (req,res,next) => {
        fn(req,res).catch(err => res.json({message:"error", err}))
    }
  }


  export default handlError