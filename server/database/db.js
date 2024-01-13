import mongoose from "mongoose";

const DBConnection =async()=>{
    const MONGODB_URL =  process.env.DATABASE_URL;
    try {
       await mongoose.connect(MONGODB_URL);
        console.log("database connected succesfully")
    } catch (error) {
        console.error('error while connecting with the database',error.message);
    }
}
export default DBConnection;