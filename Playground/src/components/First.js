import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { Button } from "./common";
import { Actions } from "react-native-router-flux";

class First extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={async () => {
            await AsyncStorage.setItem("msg", "yesss");

            Actions.second({ type: "reset" });
          }}
        >
          Goto Second!
        </Button>
      </View>
    );
  }
}

export default First;
