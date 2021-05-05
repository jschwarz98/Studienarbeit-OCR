import { StyleSheet, Dimensions } from "react-native";
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
  dropDownStyle: { backgroundColor: "#fafafa" },
  buttonArrayContainer: {
    padding: 10,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-around",
    marginBottom: 10,
  },
  buttonImageStyle: {
    width: 50,
    height: 50,
  },
  dropDownPicker: {
    width: 90,
    backgroundColor: "#fafafa",
  },
  dropDownPickerItem: {
    justifyContent: "flex-start",
  },
});

export default stylesheet;
