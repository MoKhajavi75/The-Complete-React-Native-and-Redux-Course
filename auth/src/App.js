import React, { Component } from "react";
import { View } from "react-native";
import firebase from "react-native-firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCylGsSSVVzIeT1G90IVA53Dg3IOw4x6D8",
      authDomain: "auth-977c6.firebaseapp.com",
      databaseURL: "https://auth-977c6.firebaseio.com",
      projectId: "auth-977c6",
      storageBucket: "auth-977c6.appspot.com",
      messagingSenderId: "481491364872"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
