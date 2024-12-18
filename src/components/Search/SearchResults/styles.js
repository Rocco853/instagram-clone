import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../theme/colors";
import { fontSizes, fontWeights } from "../../../theme/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.instagramPink,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: fontSizes.medium,
    fontWeight: "bold",
    color: colors.text,
  },
});

export default styles
