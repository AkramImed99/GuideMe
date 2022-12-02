import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";
import {
  Stack,
  Button,
  TextInput,
  IconButton,
  Text,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SocialIcon } from "react-native-elements";

class ClientChoicesSignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./img/Client_Choices.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Stack spacing={10} style={{ margin: 16 }}>
            <Text style={{ marginLeft: 15, marginTop: 130 }}>
              Create your account
            </Text>
            <TextInput
              label="Email"
              leading={(props) => <Icon name="email" {...props} />}
            />
            <TextInput
              label="Password"
              variant="outlined"
              trailing={(props) => (
                <IconButton
                  icon={(props) => <Icon name="eye" {...props} />}
                  {...props}
                />
              )}
            />
            <TextInput
              label="Confirm your password"
              variant="outlined"
              trailing={(props) => (
                <IconButton
                  icon={(props) => <Icon name="eye" {...props} />}
                  {...props}
                />
              )}
            />{" "}
            <TextInput
              label="Phone number"
              leading={(props) => <Icon name="phone" {...props} />}
            />
            <Button
              title="Sign up"
              style={{ width: 200, height: 40, marginLeft: 60 }}
            />
          </Stack>
          <Text style={{ marginLeft: 38 }}>Sign up with</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 50,
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <SocialIcon type="facebook" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <SocialIcon type="google" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <SocialIcon type="twitter" />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require("./img/Client_Choices.png")}
//         resizeMode="cover"
//         style={styles.image}
//       >
//         <Stack spacing={10} style={{ margin: 16 }}>
//           <Text style={{ marginLeft: 15, marginTop: 130 }}>
//             Create your account
//           </Text>
//           <TextInput
//             label="Email"
//             leading={(props) => <Icon name="email" {...props} />}
//           />
//           <TextInput
//             label="Password"
//             variant="outlined"
//             trailing={(props) => (
//               <IconButton
//                 icon={(props) => <Icon name="eye" {...props} />}
//                 {...props}
//               />
//             )}
//           />
//           <TextInput
//             label="Confirm your password"
//             variant="outlined"
//             trailing={(props) => (
//               <IconButton
//                 icon={(props) => <Icon name="eye" {...props} />}
//                 {...props}
//               />
//             )}
//           />{" "}
//           <TextInput
//             label="Phone number"
//             leading={(props) => <Icon name="phone" {...props} />}
//           />
//           <Button
//             title="Sign up"
//             style={{ width: 200, height: 40, marginLeft: 60 }}
//           />
//         </Stack>
//         <Text style={{ marginLeft: 38 }}>Sign up with</Text>
//         <View
//           style={{
//             flexDirection: "row",
//             marginTop: 50,
//             justifyContent: "center",
//           }}
//         >
//           <View style={{ flexDirection: "column" }}>
//             <SocialIcon type="facebook" />
//           </View>
//           <View style={{ flexDirection: "column" }}>
//             <SocialIcon type="google" />
//           </View>
//           <View style={{ flexDirection: "column" }}>
//             <SocialIcon type="twitter" />
//           </View>
//         </View>
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
export default ClientChoicesSignUp;
