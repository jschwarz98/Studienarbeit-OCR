import React from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import galleryPicker from "./PickerFunctions/GalleryPicker";
import cameraPicker from "./PickerFunctions/CameraPicker";
import CustomButton from "./CustomButton/CustomButton";

import styles from "./Styles";
import constants from "../Constants";

const languageOptions = [
  {
    label: "German",
    value: "deu",
  },
  {
    label: "English",
    value: "eng",
  },
];

const buttonArray = (props) => {
  return (
    <View style={styles.buttonArrayContainer}>
      <View style={styles.button}>
        <CustomButton
          text={constants.galleryButtonText}
          image={constants.galleryImage}
          picker={galleryPicker}
          setImage={props.setImage}
          language={props.language}
          selectedImageCallback={props.selectedImageCallback}
        />
      </View>
      <View style={styles.button}>
        <CustomButton
          text={constants.cameraButtonText}
          image={constants.cameraImage}
          picker={cameraPicker}
          setImage={props.setImage}
          language={props.language}
          selectedImageCallback={props.selectedImageCallback}
        />
      </View>
      <View style={styles.pickerContainer}>
        <DropDownPicker
          items={languageOptions}
          defaultValue={props.language}
          onChangeItem={(item) => props.setLanguage(item.value)}
          dropDownStyle={styles.dropDownStyle}
          itemStyle={styles.dropDownPickerItem}
          style={styles.dropDownPicker}
        />
      </View>
    </View>
  );
};

export default buttonArray;
