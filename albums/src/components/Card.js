import React from "react";
import { View } from "react-native";

const Card = props => {
  return <View style={styles.containterStyle}>{props.children}</View>;
};

const styles = {
  containterStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#D0D0D0",
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
