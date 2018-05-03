import React from "react";
import { View } from "react-native";

const Card = () => {
  return (
    <View style={styles.containterStyle}>
      <Text>test</Text>
    </View>
  );
};

export default Card;

const styles = {
  containterStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#D0D0D0",
    borderBottomWidth: 0,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
