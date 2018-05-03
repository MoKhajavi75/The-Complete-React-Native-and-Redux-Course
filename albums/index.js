import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/Header";

const App = () => <Header headerText={"!"} />;

AppRegistry.registerComponent("albums", () => App);
