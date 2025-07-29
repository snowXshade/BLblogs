import React from 'react'
import ProfileHeader from './ProfileHeader'
import PostTab from './PostTab'
import PostGrid from './PostGrid'

const MyProfile = () => {
  return (
    <div className="max-w-5xl mx-auto font-sans">
      <ProfileHeader />
      <PostTab />
      <PostGrid />
    </div>
  )
}

export default MyProfile
