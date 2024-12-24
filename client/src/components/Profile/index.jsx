// Profile.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles'

const Profile = ({ user }) => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      
      {/* Username */}
      <Text style={styles.username}>{user.username}</Text>
      
      {/* Bio */}
      <Text style={styles.bio}>{user.bio}</Text>
      
      {/* Followers and Following Count */}
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{user.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{user.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{user.posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
      </View>

    </View>
  );
};

export default Profile;

