import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDZdd-5u10po03Yu4f48b7IIs4F2y6n5Vs",
      authDomain: "authentication-f6711.firebaseapp.com",
      databaseURL: "https://authentication-f6711.firebaseio.com",
      projectId: "authentication-f6711",
      storageBucket: "authentication-f6711.appspot.com",
      messagingSenderId: "1058681011520"
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
