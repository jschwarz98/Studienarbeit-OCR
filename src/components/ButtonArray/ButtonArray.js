import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import galleryPicker from "./GalleryPicker";

import styles from "./Styles";
import constants from "../Constants";

const buttonArray = (props) => {
  return (
    <View style={styles.buttonArrayContainer}>
      <TouchableOpacity
        onPress={() => {
          galleryPicker(
            props.setImage,
            props.language,
            props.selectedImageCallback
          );
        }}
      >
        <View style={styles.galleryButtonContent}>
          <Image
            source={constants.gallery_image}
            style={styles.buttonImageStyle}
          />
          <Text>Gallery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          galleryPicker(
            props.setImage,
            props.language,
            props.selectedImageCallback
          );
        }}
      >
        <View style={styles.galleryButtonContent}>
          <Image
            source={constants.camera_image}
            style={styles.buttonImageStyle}
          />
          <Text style={styles.galleryButtonText}>Camera</Text>
        </View>
      </TouchableOpacity>

      <DropDownPicker
        items={[
          {
            label: "German",
            value: "deu",
          },
          {
            label: "English",
            value: "eng",
          },
        ]}
        defaultValue={props.language}
        style={styles.dropDownPicker}
        itemStyle={styles.dropDownPickerItem}
        dropDownStyle={styles.dropDownStyle}
        onChangeItem={(item) => props.setLanguage(item.value)}
      />
    </View>
  );
};

export default buttonArray;
