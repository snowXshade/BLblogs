import mongoose from "mongoose";
// ------------------- MongoDB User Model -------------------

const userSchema = new mongoose.Schema({
  
  username: { type: String, required: true, unique: true },
  name: { type: String },
  email: {type:String ,  required:true},
  password: { type: String, required: true },
});

const users = mongoose.model.users || mongoose.model('users', userSchema);

export default users;