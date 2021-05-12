import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import galleryPicker from "../ButtonArray/PickerFunctions/GalleryPicker";
import constants from "../Constants";
import styles from "./Styles";

function SelectedImageBox(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          galleryPicker(
            props.setImage,
            props.language,
            props.selectedImageCallback
          )
        }
      >
        <View>
          {props.image && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: props.image }} style={styles.image} />
            </View>
          )}
          {!props.image && (
            <View style={styles.imageContainerDefault}>
              <Image
                source={constants.imagebox_placeholder}
                style={styles.defaultImage}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SelectedImageBox;
