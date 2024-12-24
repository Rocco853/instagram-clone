// ProfilePage.js
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Profile from '../../components/Profile'

const ProfilePage = () => {
  const user = {
    username: "john_doe",
    profilePicture:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    bio: "Adventure seeker. Coffee lover.",
    followers: "1.2k",
    following: "300",
    posts: "45",
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Profile user={user} />
    </SafeAreaView>
  );
};

export default ProfilePage;
