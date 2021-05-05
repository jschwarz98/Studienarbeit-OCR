import React from "react";
import { View, Text } from "react-native";

import styles from "./Styles";
import constants from "../Constants";

let header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{constants.title}</Text>
    </View>
  );
};

export default header;
