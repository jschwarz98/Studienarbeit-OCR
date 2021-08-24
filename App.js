import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";

import styles from "./AppStyles";

import Header from "./src/components/header/Header";
import ButtonArray from "./src/components/ButtonArray/ButtonArray";
import SelectedImageBox from "./src/components/selectedImageBox/SelectedImageBox";
import RecognizedTextContainer from "./src/components/RecognizedTextContainer/RecognizedTextContainer";

import constants from "./src/components/Constants";

import TesseractOcr from "react-native-tesseract-ocr";

export default function App() {
  const [image, setImage] = useState(null);
  const [recognizedText, setRecognizedText] = useState(
    constants.recognizedTextContainerWelcomeMessage
  );
  const [language, setLanguage] = useState(constants.defaultLanguage);

  // Mit Übergabewerten, da sonst beim ersten Ausführung null übergeben wird.
  // Keine Ahnung warum. React Hooks zu langsam?

  let recognizeTextInImage = async (pickedImage, pickedLanguage) => {
    setRecognizedText(constants.waitingMessage);
    try {
      let imagePath = "";

      if (
        !pickedImage.startsWith("file:///") &&
        pickedImage.startsWith("file:/")
      ) {
        imagePath = pickedImage.replace("file:/", "file:///");
      }

      const tesseractOptions = {};

      const ocrText = await TesseractOcr.recognize(
        imagePath,
        pickedLanguage,
        tesseractOptions
      );

      if (ocrText != "") {
        setRecognizedText(ocrText);
      } else {
        switch (language) {
          case "deu":
            setRecognizedText(constants.noTextFound_ger);
            break;

          case "eng":
          default:
            setRecognizedText(constants.noTextFound_eng);
            break;
        }
      }
    } catch (err) {
      console.error(err);
      switch (language) {
        case "deu":
          setRecognizedText(constants.errorMessage_ger);
          break;

        case "eng":
        default:
          setRecognizedText(constants.errorMessage_eng);
          break;
      }
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

      <RecognizedTextContainer text={recognizedText} />
    </View>
  );
}
