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
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.bold,
    color: colors.instagramPink,
  },
  bio: {
    fontSize: fontSizes.regular,
    color: colors.text,
    textAlign: "center",
    marginVertical: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  stat: {
    alignItems: "center",
  },
  statCount: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.bold,
    color: colors.instagramPurple,
  },
  statLabel: {
    fontSize: fontSizes.small,
    color: colors.text,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.instagramOrange,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: colors.background,
    fontWeight: fontWeights.bold,
  },
});

export default styles