import React from 'react'
import { Link } from 'react-router-dom';

const sampleBlogs = [
  {
    id: 1,
    title: "How to Start Blogging as a Developer",
    author: "Ruchi Sharma",
    snippet: "Kickstart your writing journey with simple steps and tools...",
  },
  {
    id: 2,
    title: "Top 5 Markdown Tips for Bloggers",
    author: "Dev Writer",
    snippet: "Markdown makes blogging faster — learn how to use bold, code, and more...",
  },
  {
    id: 3,
    title: "The Power of Sharing Technical Knowledge",
    author: "Anonymous Dev",
    snippet: "Writing improves your thinking — why every dev should blog...",
  },
];

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4">

      {/* Hero Section */}
      <section className="text-center mt-12 max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">Share Your Knowledge with the World</h2>
        <p className="text-lg text-gray-600">
          Start blogging today with our markdown-powered editor and a simple, beautiful platform designed for developers.
        </p>
        <Link to="/signup" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Start Writing
        </Link>
      </section>

      {/* Sample Blogs Preview */}
      <section className="mt-16 w-full max-w-5xl">
        <h3 className="text-2xl font-semibold mb-6">Explore Sample Blogs</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {sampleBlogs.map((blog) => (
            <div key={blog.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-blue-700">{blog.title}</h4>
              <p className="text-sm text-gray-500 mb-2">by {blog.author}</p>
              <p className="text-gray-700 text-sm">{blog.snippet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-400 text-sm pb-6">
        © {new Date().getFullYear()} DevBlog. Made with 💙 by <a href="https://github.com/arbitronmaths">Utakarsh</a> & <a href="https://github.com/snowXshade">Ruchi</a>
      </footer>
    </div>
    </div>
  )
}

export default Home
