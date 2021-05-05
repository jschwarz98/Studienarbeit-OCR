import * as ImagePicker from "expo-image-picker";

const pickImageFromGallery = async (setImage, language, callback) => {
  // TODO: Kamera
  // Fertig: Galerie
  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled) {
    return;
  }

  setImage(pickerResult.uri);
  callback(pickerResult.uri, language);
};
module.exports = pickImageFromGallery;
