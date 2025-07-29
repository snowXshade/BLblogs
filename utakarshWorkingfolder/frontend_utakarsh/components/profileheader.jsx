import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="flex items-center gap-6 px-6 py-4">
      <img
        className="w-28 h-28 rounded-full border-2 border-pink-500"
        src="https://www.tvhland.com/vignette/tag/202201/61ddb49de0e1e.webp" // Profile picture
        alt="Profile"
      />
      <div>
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-2xl font-semibold">Zenitsu</h2>
          <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded">Follow</button>
        </div>
        <div className="flex gap-6 text-sm">
          <span><strong>500</strong> posts</span>
          <span><strong>943k</strong> followers</span>
          <span><strong>428</strong> following</span>
        </div>
        <div className="mt-2 text-sm">
          <p className="font-semibold">ZEN</p>
          <p>Demon Slayer</p>
          <p>Thunder⚡⚡</p>
          <a href="#" className="text-blue-500">linkin.bio/toms</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
