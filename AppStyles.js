import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default styles;
