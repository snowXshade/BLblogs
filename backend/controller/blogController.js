import Blog from '../models/blogModel.js';

// POST /api/blog/new
export const createBlog = async (req, res) => {
  const { title, content } = req.body;

  // Validate input
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    // Make sure the user is authenticated and attached to req.user
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: 'Unauthorized: No user data' });
    }

    // Create blog with author's ID
    const blog = new Blog({
      title,
      content,
      author: req.user._id, // 🔐 Automatically from logged-in user
    });

    await blog.save();

    res.status(201).json({
      message: 'Blog created successfully',
      blog,
    });
  } catch (err) {
    console.error('Create blog error:', err);
    res.status(500).json({ message: 'Failed to create blog' });
  }
};

// Update Blog
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const blog = await Blog.findById(id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to update this blog' });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    await blog.save();

    res.json({ message: 'Blog updated successfully', blog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update blog' });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this blog' });
    }

    await blog.deleteOne();
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete blog' });
  }
};
