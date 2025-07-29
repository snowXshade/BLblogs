import React from 'react';
import ProfileHeader from '../components/profileheader'
import PostTabs from '../components/postTab';
import PostGrid from '../components/postGrid';

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto font-sans">
      <ProfileHeader />
      <PostTabs />
      <PostGrid />
    </div>
  );
};

export default ProfilePage;
