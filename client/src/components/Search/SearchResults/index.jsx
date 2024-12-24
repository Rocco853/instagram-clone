// SearchResult.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';

const SearchResult = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePicture }} style={styles.avatar} />
      <Text style={styles.username}>{user.username}</Text>
    </View>
  );
};

export default SearchResult;

