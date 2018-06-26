import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

class App extends Component {
  render() {
    const {
      container,
      topContainer,
      topTextContainer,
      bottomContainer,
      buttonContainer,
      rowStyles,
      commandButton,
      numericButton,
      arithmeticButton,
      buttonText
    } = styles;

    return (
      <View style={container}>
        {/* top */}
        <View style={topContainer}>
          <Text style={topTextContainer}>Top</Text>
        </View>

        {/* bottom */}
        <View style={bottomContainer}>
          {/* left */}
          <View style={buttonContainer}>
            {/* 1st row */}
            <View style={rowStyles}>
              <TouchableOpacity style={commandButton}>
                <Text style={buttonText}>CA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={commandButton}>
                <Text style={buttonText}>+/-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={commandButton}>
                <Text style={buttonText}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={arithmeticButton}>
                <Text style={buttonText}>÷</Text>
              </TouchableOpacity>
            </View>

            {/* 2nd row */}
            <View style={rowStyles}>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={arithmeticButton}>
                <Text style={buttonText}>×</Text>
              </TouchableOpacity>
            </View>

            {/* 3rd row */}
            <View style={rowStyles}>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={arithmeticButton}>
                <Text style={buttonText}>-</Text>
              </TouchableOpacity>
            </View>

            {/* 4th row */}
            <View style={rowStyles}>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={numericButton}>
                <Text style={buttonText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={arithmeticButton}>
                <Text style={buttonText}>+</Text>
              </TouchableOpacity>
            </View>

            {/* 5th row */}
            <View style={rowStyles}>
              <View style={{ flex: 2, flexDirection: "row" }}>
                <TouchableOpacity style={numericButton}>
                  <Text style={buttonText}>0</Text>
                </TouchableOpacity>
              </View>
              <View style={rowStyles}>
                <TouchableOpacity style={numericButton}>
                  <Text style={buttonText}>.</Text>
                </TouchableOpacity>
              </View>
              <View style={rowStyles}>
                <TouchableOpacity style={arithmeticButton}>
                  <Text style={buttonText}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
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

  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center"
  },

  rowStyles: {
    flex: 1,
    flexDirection: "row"
  },

  numericButton: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#B0C4DE",
    margin: 5,
    borderRadius: 5
  },

  arithmeticButton: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#FF9C00",
    margin: 5,
    borderRadius: 5
  },

  commandButton: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#778899",
    margin: 5,
    borderRadius: 5
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;
