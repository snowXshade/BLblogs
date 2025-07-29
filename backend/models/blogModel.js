// models/blogModel.js
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  content: { type: Object, required: true }, // assuming Lexical JSON
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  createdAt: { type: Date, default: Date.now }
});

const blog = mongoose.model.blog ||  mongoose.model('blog', blogSchema);
export default blog;
