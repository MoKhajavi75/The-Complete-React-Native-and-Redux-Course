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
            {/* left - 1st row */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity style={styles.numericButton}>
                <Text style={styles.buttonText}>CA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numericButton}>
                <Text style={styles.buttonText}>+/-</Text>
              </TouchableOpacity>
            </View>

            {/* left - 2nd row */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity style={styles.arithmeticButton}>
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.arithmeticButton}>
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
            </View>

            {/* left - 3rd row */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity style={styles.arithmeticButton}>
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.arithmeticButton}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
            </View>

            {/* left - 4th row */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity style={styles.arithmeticButton}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.arithmeticButton}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
            </View>

            {/* left - 0 */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity style={styles.arithmeticButton}>
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
            </View>
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
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center"
  },

  numericButton: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#B0C4DE",
    margin: 5
  },

  arithmeticButton: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#FF8C00",
    margin: 5
  },

  buttonText: {
    textAlign: "center"
  }
});

export default App;
