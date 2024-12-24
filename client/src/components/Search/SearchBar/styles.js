import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../theme/colors";
import { fontSizes, fontWeights } from "../../../theme/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    elevation: 2, // Shadow effect for Android
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: fontSizes.regular,
    color: colors.text,
  },
});

export default styles;
