import React from "react";
import styles from "./Styles";
import { Text, View, ScrollView } from "react-native";

function textContainer(props) {
  return (
    <View style={styles.scrollviewContainer}>
      <ScrollView>
        <Text selectable={true} style={styles.recognizedText}>
          {props.text}
        </Text>
      </ScrollView>
    </View>
  );
}
export default textContainer;
