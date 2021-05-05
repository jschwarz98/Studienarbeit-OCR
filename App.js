import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";

import styles from "./AppStyles";

import Header from "./src/components/header/Header";

import ButtonArray from "./src/components/ButtonArray/ButtonArray";
import galleryPicker from "./src/components/ButtonArray/GalleryPicker";

import TesseractOcr from "react-native-tesseract-ocr";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(
    "The recognized text will be displayed here! \nIf needed, you can scroll down. \nTry it out right now! \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Hello there! :) \n\n"
  );
  const [language, setLanguage] = useState("eng");

  // Mit Übergabewerten, da sonst beim ersten Ausführung null übergeben wird.
  // Keine Ahnung warum. React Hooks zu langsam?
  let recognizeTextInImage = async (image, language) => {
    setText("Recognizing text...");
    try {
      const path = image.replace("file:", "");
      const tesseractOptions = {};
      const recognizedText = await TesseractOcr.recognize(
        path,
        language,
        tesseractOptions
      );
      if (recognizedText != "") {
        setText(recognizedText);
      } else {
        setText("Didn't recognize any text");
      }
    } catch (err) {
      console.error(err);
      setText("Error occured");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <ButtonArray
        language={language}
        setLanguage={setLanguage}
        setImage={setImage}
        selectedImageCallback={recognizeTextInImage}
      />

      <TouchableOpacity
        onPress={() => galleryPicker(setImage, language, recognizeTextInImage)}
      >
        <View>
          {image && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          )}
          {!image && (
            <View style={styles.imageContainerDefault}>
              <Image
                source={require("./src/assets/images/placeholder2.jpg")}
                style={styles.defaultImage}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.scrollviewContainer}>
        <ScrollView>
          <Text style={styles.recognizedText}>{text}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
