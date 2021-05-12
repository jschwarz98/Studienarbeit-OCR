import * as ImagePicker from "expo-image-picker";

const takePhotograph = async (setImage, language, callback) => {
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
