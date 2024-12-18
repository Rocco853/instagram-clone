import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Feather from '@expo/vector-icons/Feather';
import { colors } from "../../theme/colors";
import { fonts, fontSizes, fontWeights } from "../../theme/fonts";
import styles from './styles'

const ImageListItem = ({ posts }) => {
  return (
    <View style={styles.container}>
      {/* Profile Header Row */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: posts.user.image }} style={styles.avatar} />
        <Text style={styles.profileHeaderText}>{posts.user.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: posts.image }} style={styles.imagePost} />

      {/* Like Icons */}
      <View style={styles.iconsContainer}>
        <Feather name="thumbs-up" size={24} color="black" />
        <Feather name="thumbs-up" size={24} color="black" />
        <Feather name="thumbs-up" size={24} color="black" />
      </View>

      {/* Post Details */}
      <View style={styles.postDetails}>
        <Text style={styles.postCaption}>
          <Text style={styles.userNameText}>{posts.user.username}</Text>
          <Text> {posts.description}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ImageListItem;

