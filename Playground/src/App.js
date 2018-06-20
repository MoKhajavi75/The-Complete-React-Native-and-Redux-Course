import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Constants } from "expo";

splitPhrase = (phrase, isTerm = false) => {
  let words = phrase.split(" ");
  return words.map((i, k) => {
    return (
      <Text key={k} style={isTerm ? styles.emptyTerm : styles.paragraphs}>
        {" "}
        {i}{" "}
      </Text>
    );
  });
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paragraphs}>
          <Text style={styles.textParagraph}>Lorem Ipsum is</Text>
          <Text style={styles.emptyTerm} />
          <Text style={styles.textParagraph}>
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  emptyTerm: {
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    minWidth: "25%"
  },
  paragraphs: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
