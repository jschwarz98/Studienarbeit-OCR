import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  scrollviewContainer: {
    flex: 0.95,
    width: Dimensions.get("window").width * 0.9,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    paddingRight: 7,
  },

  recognizedText: {
    fontSize: 18,
    color: "black",
  },
});

export default styles;
