import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Stack, Button } from "@react-native-material/core";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./img/Home.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Stack fill center spacing={10} style={{ marginTop: 500 }}>
            <Button
              title="Client"
              style={{ width: 300 }}
              onPress={() =>
                this.props.navigation.navigate("ClientChoicesSignIn")
              }
            />
            <Button
              title="Guide"
              style={{ width: 300 }}
              onPress={() =>
                this.props.navigation.navigate("ClientChoicesSignIn")
              }
            />
          </Stack>
        </ImageBackground>
      </View>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require("./img/Home.png")}
//         resizeMode="cover"
//         style={styles.image}
//       >
//         <Stack fill center spacing={10} style={{ marginTop: 500 }}>
//           <Button title="Client" style={{ width: 300 }} />
//           <Button title="Guide" style={{ width: 300 }} />
//         </Stack>
//       </ImageBackground>
//     </View>
//   );
// }

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

export default Home;
