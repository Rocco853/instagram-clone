import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { fontSizes, fontWeights } from "../../theme/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: fontSizes.xlarge,
    fontWeight: "bold",
    color: colors.instagramPink,
    marginBottom: 20,
  },
  imagePreview: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: colors.instagramPurple,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 10,
    color: colors.text,
  },
});

export default styles;
