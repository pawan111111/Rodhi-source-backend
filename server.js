import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import tiktok from "./dbModels.js";
import router from './router/route.js'
import adminRoutes from './router/admin/auth.js';
import categoryRoutes from "./router/category.js";
import allSounds from "./Homedata/allSounds.js"
import allEarbuds from "./Homedata/allEarbuds.js"
import cors from "cors";


//app config
const app = express();
app.use(cors());

const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());

//DB Config
const connection_url= 'mongodb+srv://yantramnepal:nuG62AUhWPxQ8VCX@cluster1.rg6r7a9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  
    
})

//api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));
app.get('/v1/posts', (req, res) => res.status(200).send(Data))
app.get('/v1/allsounds', (req, res) => res.status(200).send(allSounds))
app.get('/v1/earbuds', (req, res) => res.status(200).send(allEarbuds))

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body

    tiktok.create(dbVideos,  (err, data) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//api routes
app.use('/api', router)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)

//listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));
