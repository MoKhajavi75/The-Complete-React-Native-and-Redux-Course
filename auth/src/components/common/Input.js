import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = props => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={props.onChangeText}
        value={props.value}
        autoCorrect={false}
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#AAAAAA"
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
