import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Text>Lorem Ipsum is </Text>
          <Text style={styles.emptyTermStyle}> </Text>
          <Text>
            {" "}
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    paddingTop: 20,
    backgroundColor: "#ecf0f1"
  },

  emptyTermStyle: {
    width: 50,
    borderBottomWidth: 1,
    marginVertical: 5
  }
});
