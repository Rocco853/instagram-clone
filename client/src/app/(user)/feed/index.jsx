import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageListItem from "../../../components/ImageListItem";
import posts from "../../../../assets/data/posts.json";

const UserFeed = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <ImageListItem posts={item} />}
    />
  );
};

export default UserFeed;


