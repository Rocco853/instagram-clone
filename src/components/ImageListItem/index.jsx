import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Feather from '@expo/vector-icons/Feather';
import { colors } from "../../theme/colors";
import { fonts, fontSizes, fontWeights } from "../../theme/fonts";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background

  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileHeaderText: {
    fontSize: fontSizes.regular,
    fontWeight: fontWeights.bold,
    color: colors.black
  },
  imagePost: {
    height: 450,
    width: "100%",
    marginBottom: 5,
    aspectRatio: 1 / 1,
  },
  postDetails: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center', // Align text vertically
  },
  iconsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    padding: 5,
    marginBottom: 5, // Space between likes and post details
  },
  userNameText: {
    fontSize: fontSizes.regular,
    fontWeight: fontWeights.bold,
    color: colors.black
  },
  postCaption: {
    fontSize: fontSizes.regular,
    color: colors.black
  },
});

