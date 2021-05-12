import React from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import galleryPicker from "./PickerFunctions/GalleryPicker";
import cameraPicker from "./PickerFunctions/CameraPicker";
import CustomButton from "./CustomButton/CustomButton";

import styles from "./Styles";
import constants from "../Constants";

const buttonArray = (props) => {
  return (
    <View style={styles.buttonArrayContainer}>
      <View style={styles.button}>
        <CustomButton
          text="Gallery"
          image={constants.gallery_image}
          picker={galleryPicker}
          setImage={props.setImage}
          language={props.language}
          selectedImageCallback={props.selectedImageCallback}
        />
      </View>
      <View style={styles.button}>
        <CustomButton
          text="Camera"
          image={constants.camera_image}
          picker={cameraPicker}
          setImage={props.setImage}
          language={props.language}
          selectedImageCallback={props.selectedImageCallback}
        />
      </View>
      <View style={styles.pickerContainer}>
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
