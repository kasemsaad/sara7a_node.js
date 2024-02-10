import express  from 'express';
import userRoutes from './src/user/user.routes.js';
import  initconection  from './db/connection.js';
import messageRoutes from './src/user/message.routes.js';
import multer from 'multer'
import {v4 as uuidv4 } from 'uuid'
import photogeModel from './db/photo.model.js';
const app = express();
const port = 3000
initconection()
app.use(express.json())
app.use("/uploads",express.static("uploads")) //api not path
app.use(userRoutes)
app.use(messageRoutes)



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null,uuidv4()+"_" +file.originalname)  // null /error
    }
  })
  
const upload=multer({storage})
app.post("/photo",upload.single('photo'),async(req,res)=>{
    let add=await photogeModel.insertMany({photo:req.file.filename,title:req.body.title })
    res.json({message:"image",add})
})
app.get("/allphoto",async(req,res)=>{
    let allphotos=await photogeModel.find();
//     allphotos.forEach((e)=>{
//     e.photo="http://localhost:3000/uploads/"+e.photo
// })
res.json({message:"Done",allphotos})

})



// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

