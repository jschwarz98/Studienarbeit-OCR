import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
  },

  image: {
    height: 250,
    width: Dimensions.get("window").width * 0.9,
    resizeMode: "contain",
  },

  imageContainerDefault: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 4,
    marginBottom: 20,
  },

  defaultImage: {
    height: 250,
    width: Dimensions.get("window").width * 0.9,
    resizeMode: "cover",
  },
});

export default styles;
