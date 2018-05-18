import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDZdd-5u10po03Yu4f48b7IIs4F2y6n5Vs",
      authDomain: "authentication-f6711.firebaseapp.com",
      databaseURL: "https://authentication-f6711.firebaseio.com",
      projectId: "authentication-f6711",
      storageBucket: "authentication-f6711.appspot.com",
      messagingSenderId: "1058681011520"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 50 }}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <View style={{ height: 50 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
