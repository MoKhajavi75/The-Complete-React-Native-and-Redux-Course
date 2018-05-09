import React from "react";
import { Text, View } from "react-native";

const CardSection = props => {
  return <View style={styles.containterStyle}>{props.children}</View>;
};

const styles = {
  containterStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#F0F0F0",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#D0D0D0",
    position: "relative"
  }
};

export { CardSection };
