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

  galleryButtonContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlignVertical: "center",
  },

  galleryButtonText: {
    height: "100%",
  },

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
