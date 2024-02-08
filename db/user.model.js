import mongoose from 'mongoose'
const schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:String,
    age:Number,
    password:{  
    type:String,  
    require:true
        },
},
{
    timestamps:true
}
)
const userModel =mongoose.model("User",schema) //User name collection and create 
export default userModel;