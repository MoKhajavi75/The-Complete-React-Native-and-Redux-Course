import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class Playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxes} />
        <View style={styles.boxes} />
        <View
          style={[
            styles.boxes,
            {
              backgroundColor: "crimson",
              position: "absolute",
              right: 0
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  boxes: {
    width: 50,
    height: 50,
    marginLeft: 1, // to separate each box!
    backgroundColor: "steelblue"
  }
});

export default Playground;
