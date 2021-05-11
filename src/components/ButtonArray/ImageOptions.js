import * as ImagePicker from "expo-image-picker";

const imagePickerOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
  base64: false,
  exif: false,
};

const cameraPickerOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
  base64: false,
  exif: false,
};

module.exports = {
  imagePickerOptions: imagePickerOptions,
  cameraPickerOptions: cameraPickerOptions,
};
