import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./Styles";

function CostumButton(props) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.picker(
          props.setImage,
          props.language,
          props.selectedImageCallback
        )
      }
    >
      <View style={styles.galleryButtonContent}>
        <Image source={props.image} style={styles.buttonImageStyle} />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CostumButton;
