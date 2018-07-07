import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "./common";
import { Actions } from "react-native-router-flux";

class Second extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => {
            Actions.first();
          }}
        >
          Goto First!
        </Button>

        <Text>{this.props.operator}</Text>
      </View>
    );
  }
}

export default Second;
