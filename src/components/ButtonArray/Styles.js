import { StyleSheet } from "react-native";

const stylesheet = StyleSheet.create({
  buttonArrayContainer: {
    flexDirection: "row",
    display: "flex",
    width: "90%",
    marginBottom: 10,
  },

  button: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },

  pickerContainer: {
    flex: 2,
  },

  dropDownPicker: {
    backgroundColor: "#fafafa",
    height: "100%",
    minHeight: "100%",
  },

  dropDownStyle: {
    backgroundColor: "#fafafa",
    maxHeight: 250,
  },
  dropDownPickerItem: {
    justifyContent: "flex-start",
  },
});

export default stylesheet;
