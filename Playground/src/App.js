import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* top */}
        <View style={styles.topContainer}>
          <Text style={styles.topTextContainer}>Top</Text>
        </View>

        {/* bottom */}
        <View style={styles.bottomContainer}>
          {/* left */}
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.numericButton}>
              <Text style={styles.buttonText}>left 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numericButton}>
              <Text style={styles.buttonText}>left 2</Text>
            </TouchableOpacity>
          </View>

          {/* right */}
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.numericButton}>
              <Text style={styles.buttonText}>right 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numericButton}>
              <Text style={styles.buttonText}>right 2</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "#F0FFFF",
    padding: 5
  },

  topContainer: {
    flex: 3,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#252525"
  },

  topTextContainer: {
    alignSelf: "center",
    color: "#F8F8FF"
  },

  bottomContainer: {
    flex: 7,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#D3D3D3"
  },

  sideContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  numericButton: {
    flex: 1,
    backgroundColor: "#B0C4DE",
    alignSelf: "stretch",
    justifyContent: "center",
    margin: 5
  },

  arithmeticButton: {
    backgroundColor: "#FF8C00",
    alignItems: "center",
    margin: 20
  },

  buttonText: {
    textAlign: "center"
  }
});

export default App;
