//important imports
import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native"; // importing components
import { Stack, Button } from "@react-native-material/core";

// The home screen contains the text “You are on the home page” and a button.
class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./img/LoadingScreen.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Button
            style={{ marginTop: 100 }}
            title="Go to the main page"
            onPress={() => this.props.navigation.navigate("Home")}
            variant="outlined"
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default AboutScreen;
