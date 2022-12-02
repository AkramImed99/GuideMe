import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button } from "@react-native-material/core";

import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen ";
import ClientChoicesSignIn from "./ClientChoicesSignIn";
import ClientChoicesSignUp from "./ClientChoicesSignUp";
import Home from "./Home";
import SearchGuide from "./SearchGuide";
import GuideProfile from "./GuideProfile";
import GuideAgendaa from "./GuideAgenda";

import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack"; //Insert screens into a stack
import { NavigationContainer } from "@react-navigation/native"; //contains navigator and screen

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ClientChoicesSignIn"
            component={ClientChoicesSignIn}
          />
          <Stack.Screen
            name="ClientChoicesSignUp"
            component={ClientChoicesSignUp}
          />
          <Stack.Screen name="SearchGuide" component={SearchGuide} />
          <Stack.Screen name="GuideProfile" component={GuideProfile} />
          <Stack.Screen name="GuideAgendaa" component={GuideAgendaa} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
