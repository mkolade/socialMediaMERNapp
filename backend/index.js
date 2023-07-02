const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const dotenv = require('dotenv')
const  morgan = require('morgan')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')

dotenv.config()


//connecting to mongodb
const connectToMongoDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true})
        console.log('Connected to db')
        app.listen(process.env.PORT || 4000,() =>{
            console.log('server ready on port ',process.env.PORT || 4000)
        })
    }catch(err){
        console.log('Error connecting to db',err)
    }
}
(async () => {
    await connectToMongoDb();
  })();


//middlewares
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(cors());

//routes
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/post',postRoutes)
