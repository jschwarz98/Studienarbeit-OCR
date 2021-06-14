import * as ImagePicker from "expo-image-picker";

const pickImageFromGallery = async (setImage, language, callback) => {
  let permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  // https://github.com/expo/expo/tree/master/packages/expo-image-picker
  // Übersicht um Permissions einzustellen, damit man croppen can etc...
  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled) {
    return;
  }

  setImage(pickerResult.uri);
  callback(pickerResult.uri, language);
};

module.exports = pickImageFromGallery;
