import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
