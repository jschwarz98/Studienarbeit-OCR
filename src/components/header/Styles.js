import { StyleSheet } from "react-native";
import colors from "../Colors";

const stylesheet = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    margin: 5,
    marginBottom: 10,

    backgroundColor: colors.primary_color,

    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",

    color: colors.fontColor_white,

    textAlign: "center",
  },
});

export default stylesheet;
