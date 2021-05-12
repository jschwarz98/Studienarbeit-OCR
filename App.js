import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";

import styles from "./AppStyles";

import Header from "./src/components/Header/Header";
import ButtonArray from "./src/components/ButtonArray/ButtonArray";
import SelectedImageBox from "./src/components/SelectedImageBox/SelectedImageBox";
import RecognizedTextContainer from "./src/components/RecognizedTextContainer/RecognizedTextContainer";

import TesseractOcr from "react-native-tesseract-ocr";

export default function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(
    "The recognized text will be displayed here! \nIf needed, you can scroll down. \nTry it out right now! \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Hello there! :) \n\n"
  );
  const [language, setLanguage] = useState("eng");

  // Mit Übergabewerten, da sonst beim ersten Ausführung null übergeben wird.
  // Keine Ahnung warum. React Hooks zu langsam?
  let recognizeTextInImage = async (pickedImage, pickedLanguage) => {
    setText("Recognizing text...");
    try {
      const path = pickedImage.replace("file:", "");
      const tesseractOptions = {};
      const recognizedText = await TesseractOcr.recognize(
        path,
        pickedLanguage,
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
      <SelectedImageBox
        image={image}
        language={language}
        setImage={setImage}
        selectedImageCallback={recognizeTextInImage}
      />
      <RecognizedTextContainer text={text} />
    </View>
  );
}
