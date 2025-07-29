import React from 'react';

const PostGrid = () => {
  return (
   <>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-200"
      >
        <h2 className="text-xl font-semibold mb-2">Blog Post Title {i}</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae adipisci aliquid!
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm text-gray-400">By John Doe</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">
            Read More
          </button>
        </div>
      </div>
    ))}
   </div>
   </>
  );
};

export default PostGrid;
