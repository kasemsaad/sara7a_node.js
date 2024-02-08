import mongoose from 'mongoose';

const messSchema=new mongoose.Schema({
messageText:{
    require:true,
    type:String,
},
recievedId:{
    type: mongoose.Types.ObjectId,
    
    ref:"User"
}

},{
 timestamps:true  
})
const messageModel=mongoose.model("message",messSchema)

export default messageModel;