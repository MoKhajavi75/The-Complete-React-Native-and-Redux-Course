import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "./common";
import { Actions } from "react-native-router-flux";

class First extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => {
            Actions.second({ type: "reset", operator: "Bello!" });
          }}
        >
          Goto Second!
        </Button>
      </View>
    );
  }
}

export default First;
