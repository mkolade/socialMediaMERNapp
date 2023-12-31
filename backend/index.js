const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const dotenv = require('dotenv')

const  morgan = require('morgan')
const cors = require('cors')
const multer = require('multer')

const userRoutes = require('./api/routes/userRoutes')
const authRoutes = require('./api/routes/authRoutes')
const postRoutes = require('./api/routes/postRoutes')
const path = require('path')

dotenv.config()


//connecting to mongodb
const connectToMongoDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to db')
        app.listen(process.env.PORT || 4000,() =>{
            console.log('server ready on port ',process.env.PORT || 4000)
        })
    }catch(err){
        console.log('Error connecting to db', err)
    }
}
(async () => {
    await connectToMongoDb();
  })();


//middlewares
app.use(express.json());
app.use(morgan('common'));
app.use(helmet({
    crossOriginResourcePolicy: false,
}))
app.use(cors());

//for post-image upload
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"public/images/post")
    },
    filename:(req,file,cb) =>{
        cb(null,req.query.filename)
    }
})
const upload = multer({storage})
app.post('/api/upload/',upload.single("file"),(req,res) =>{
    try{
        return res.status(200).json({message:"File upload successful"})
    }catch(err){
        console.log(err)
    }
})

//for profilePicture upload
const storage2 = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, path.join(__dirname, "public/images"))
    },
    filename:(req,file,cb) =>{
        cb(null,req.query.filename)
    }
})
const upload2 = multer({storage2})
app.post('/api/upload2/',upload2.single("file"),(req,res) =>{
    console.log("Request Body:", req.body);
    try{
        return res.status(200).json({message:"File upload successful"})
    }catch(err){
        console.log(err)
    }
})

//routes
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/post',postRoutes)
app.use("/images", (req,res,next) =>{
    //serve the static resources
    res.setHeader("Cross-Origin-Resource-Policy", "same-site")
    next();
},express.static(path.join(__dirname,'public/images')))
