import React from "react";
import { Scene, Router } from "react-native-router-flux";
import First from "./components/First";
import Second from "./components/Second";

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{
        backgroundColor: "#4a69bd"
      }}
    >
      <Scene initial key="root">
        <Scene
          key="first"
          component={First}
          title="First 😁"
          titleStyle={{ flex: 1, color: "white", textAlign: "center" }}
        />

        <Scene
          key="second"
          component={Second}
          title="Second 😁"
          titleStyle={{ flex: 1, color: "white", textAlign: "center" }}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
