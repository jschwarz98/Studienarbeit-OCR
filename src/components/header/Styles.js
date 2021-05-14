import { StyleSheet } from "react-native";
import colors from "../Colors";

const stylesheet = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    margin: 5,
    marginBottom: 10,
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.fontColorWhite,
    textAlign: "center",
  },
});

export default stylesheet;
