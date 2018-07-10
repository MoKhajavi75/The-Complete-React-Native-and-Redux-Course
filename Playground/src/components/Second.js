import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Button } from "./common";
import { Actions } from "react-native-router-flux";

class Second extends Component {
  state = {
    ans: ""
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={async () => {
            const value = await AsyncStorage.getItem("msg");
            this.setState({ ans: value });
          }}
        >
          Goto First!
        </Button>

        <Text>{this.state.ans}</Text>
      </View>
    );
  }
}

export default Second;
