import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import Router from "./Router";

console.disableYellowBox = true;

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
