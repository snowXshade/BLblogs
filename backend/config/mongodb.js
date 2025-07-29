// ------------------- MongoDB Connection -------------------

import mongoose from "mongoose";
import 'dotenv/config.js'
const mongo = process.env.MONGO;

export const connetedDB = () =>{

  mongoose.connect(mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection failed:', err));

};

export default connetedDB;