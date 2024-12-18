import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { fontSizes, fontWeights } from "../../theme/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    color: colors.black,
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
    flexDirection: "row",
    alignItems: "center", // Align text vertically
  },
  iconsContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    padding: 5,
    marginBottom: 5, // Space between likes and post details
  },
  userNameText: {
    fontSize: fontSizes.regular,
    fontWeight: fontWeights.bold,
    color: colors.black,
  },
  postCaption: {
    fontSize: fontSizes.regular,
    color: colors.black,
  },
});

export default styles;