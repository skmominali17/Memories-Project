// All imports
import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"

//creating app
const app = express();

// Applying Middlewares
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

// Building Connections
const CONNECTION_URL = "mongodb+srv://mominalipubg:dash123@cluster0.pxelwvq.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> app.listen(port, ()=> console.log(`Server running on port ${port}`))).catch((err) => console.log(err.message));
