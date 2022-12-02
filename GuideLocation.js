import React, { Component } from "react";
import { Button, View } from "react-native";
import openMap from "react-native-open-maps";

export default class GuideLocation extends Component {
  render() {
    openMap({ latitude: 48.856614, longitude: 2.3522219 });
    return <View></View>;
  }
}
