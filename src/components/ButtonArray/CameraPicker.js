// ToDo
import * as ImagePicker from "expo-image-picker";
import { cameraPickerOptions } from "./ImageOptions";

const takePhotograph = async (setImage, language, callback) => {
  // TODO: Kamera
  // Fertig: Galerie
  console.log(cameraPickerOptions);
  let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchCameraAsync();
  if (pickerResult.cancelled) {
    return;
  }

  setImage(pickerResult.uri);
  callback(pickerResult.uri, language);
};
module.exports = takePhotograph;
