import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import tiktok from "./dbModels.js";

//app config
const app = express();
const port = 9000;

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

//listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));
