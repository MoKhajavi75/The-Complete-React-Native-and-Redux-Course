import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginBottom: 5,
    paddingTop: 15,
    elevation: 5,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
