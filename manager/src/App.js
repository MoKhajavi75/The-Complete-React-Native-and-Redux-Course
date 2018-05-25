import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDru4BFzKHuHCBmT-lQwq7Lig1DXjnpFUg",
      authDomain: "manager-4782f.firebaseapp.com",
      databaseURL: "https://manager-4782f.firebaseio.com",
      projectId: "manager-4782f",
      storageBucket: "manager-4782f.appspot.com",
      messagingSenderId: "37117868842"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
