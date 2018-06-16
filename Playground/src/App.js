import React, { Component } from "react";
import { Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Text>First</Text>
          <Text style={{ borderBottomWidth: 1 }}>Second</Text>
          <Text>Third</Text>
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF0F1"
  }
};
