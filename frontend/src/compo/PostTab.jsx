import React from 'react';
import { FaTh, FaTv, FaUserTag } from 'react-icons/fa';

const PostTab  = () => {
  return (
    <div className="flex justify-center border-t border-gray-200 text-sm">
      <div className="flex items-center gap-2 p-3 cursor-pointer">
        <FaTh />
        <span>POSTS</span>
      </div>
    </div>
  );
};

export default PostTab ;
