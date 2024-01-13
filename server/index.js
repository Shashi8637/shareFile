import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
import { config } from "dotenv";




const PORT = process.env.PORT || 6010

const app = express();

config({
    path:"./.env",
});


app.use(cors());


app.use(express.json());
app.use('/',router);

// const PORT = 8000;

DBConnection();


app.listen(process.env.PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
});