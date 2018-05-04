import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007AFF",
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: "center",
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
