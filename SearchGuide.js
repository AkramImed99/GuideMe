import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import {
  Badge,
  Button,
  AppBar,
  HStack,
  IconButton,
  Avatar,
  Text,
  Divider,
  Stack,
  Chip,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Rating, AirbnbRating } from "react-native-ratings";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

class SearchGuide extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./img/Search.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Badge label="20 results" style={{ width: 80 }} color="primary" />
          <Button
            style={{ width: 80, marginLeft: 100, marginTop: -30 }}
            title="City"
            variant="outlined"
            leading={(props) => <Icon name="city" {...props} />}
          />
          <Button
            style={{ width: 140, marginLeft: 200, marginTop: -36 }}
            title="Display Map"
            variant="outlined"
            onPress={() => this.props.navigation.navigate("GuideLocation")}
            leading={(props) => <Icon name="map" {...props} />}
          />
          <View style={{ marginTop: 30 }}>
            <AppBar
              title="Zack Faytinho"
              subtitle="Barcelone,Espagne "
              style={{}}
              leading={(props) => <Avatar label="Rafik Meziane" autoColor />}
              trailing={(props) => (
                <Rating
                  type="star"
                  ratingCount={5}
                  ratingTextColor="red"
                  imageSize={20}
                  ratingColor="#3498db"
                  ratingBackgroundColor=""
                />
              )}
            />
            <Text style={{ marginLeft: 110 }}>Next disponibility</Text>
            <Stack
              spacing={8}
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{}}>Morning</Text>

              <Chip
                label="Mon 18"
                color="green"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Tue 19"
                color="green"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Wed 20"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
            </Stack>
            <Stack
              spacing={8}
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{}}>Afternoon</Text>

              <Chip
                label="Mon 18"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Tue 19"
                color="green"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Wed 20"
                color="green"
                style={{ flexDirection: "column" }}
              />
            </Stack>
            <AppBar
              title="Rafik Meziane"
              subtitle="Paris 13eme arrondissement
        France"
              style={{}}
              leading={(props) => <Avatar label="Rafik Meziane" autoColor />}
              trailing={(props) => (
                <Rating
                  type="star"
                  ratingCount={5}
                  ratingTextColor="red"
                  imageSize={20}
                  ratingColor="#3498db"
                  ratingBackgroundColor=""
                />
              )}
            />
            <Text style={{ marginLeft: 110 }}>Next disponibility</Text>
            <Stack
              spacing={8}
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{}}>Morning</Text>

              <Chip
                label="Mon 18:30"
                color="#FF6363"
                style={{ flexDirection: "column" }}
                onPress={() => this.props.navigation.navigate("GuideProfile")}
              />
              <Chip
                label="Tue 19"
                color="green"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Wed 20"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
            </Stack>
            <Stack
              spacing={8}
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{}}>Afternoon</Text>

              <Chip
                label="Mon 18"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Tue 19"
                color="green"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Wed 20"
                color="green"
                style={{ flexDirection: "column" }}
              />
            </Stack>
            <AppBar
              title="Rebecca Guiyana"
              subtitle="Paris 18eme arrondissement
        France"
              style={{}}
              leading={(props) => <Avatar label="Rebecca Guiyana" autoColor />}
              trailing={(props) => (
                <Rating
                  type="star"
                  ratingCount={5}
                  ratingTextColor="red"
                  imageSize={20}
                  ratingColor="#3498db"
                  ratingBackgroundColor=""
                />
              )}
            />
            <Text style={{ marginLeft: 110 }}>Next disponibility</Text>
            <Stack
              spacing={8}
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{}}>Morning</Text>

              <Chip
                label="Mon 18"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Tue 19"
                color="green"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Wed 20"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
            </Stack>
            <Stack
              spacing={8}
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{}}>Afternoon</Text>

              <Chip
                label="Mon 18"
                color="green"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Tue 19"
                color="green"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Wed 20"
                color="green"
                style={{ flexDirection: "column" }}
              />
            </Stack>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
// const SearchGuide = () => (
//   <View style={styles.container}>
//     <ImageBackground
//       source={require("./img/Search.png")}
//       resizeMode="cover"
//       style={styles.image}
//     >
//       <Badge label="20 results" style={{ width: 80 }} color="primary" />
//       <Button
//         style={{ width: 80, marginLeft: 100, marginTop: -30 }}
//         title="City"
//         variant="outlined"
//         leading={(props) => <Icon name="city" {...props} />}
//       />
//       <Button
//         style={{ width: 140, marginLeft: 200, marginTop: -36 }}
//         title="Display Map"
//         variant="outlined"
//         leading={(props) => <Icon name="map" {...props} />}
//       />
//       <View style={{ marginTop: 30 }}>
//         <AppBar
//           title="Zack Faytinho"
//           subtitle="Barcelone,Espagne "
//           style={{}}
//           leading={(props) => <Avatar label="Rafik Meziane" autoColor />}
//           trailing={(props) => (
//             <Rating
//               type="star"
//               ratingCount={5}
//               ratingTextColor="red"
//               imageSize={20}
//               ratingColor="#3498db"
//               ratingBackgroundColor=""
//             />
//           )}
//         />
//         <Text style={{ marginLeft: 110 }}>Next disponibility</Text>
//         <Stack
//           spacing={8}
//           style={{
//             flexDirection: "row",
//             marginTop: 10,
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{}}>Morning</Text>

//           <Chip
//             label="Mon 18"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Tue 19"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Wed 20"
//             color="#FF6363"
//             style={{ flexDirection: "column" }}
//           />
//         </Stack>
//         <Stack
//           spacing={8}
//           style={{
//             flexDirection: "row",
//             marginTop: 10,
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{}}>Afternoon</Text>

//           <Chip
//             label="Mon 18"
//             color="#FF6363"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Tue 19"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Wed 20"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//         </Stack>
//         <AppBar
//           title="Rafik Meziane"
//           subtitle="Paris 13eme arrondissement
//         France"
//           style={{}}
//           leading={(props) => <Avatar label="Rafik Meziane" autoColor />}
//           trailing={(props) => (
//             <Rating
//               type="star"
//               ratingCount={5}
//               ratingTextColor="red"
//               imageSize={20}
//               ratingColor="#3498db"
//               ratingBackgroundColor=""
//             />
//           )}
//         />
//         <Text style={{ marginLeft: 110 }}>Next disponibility</Text>
//         <Stack
//           spacing={8}
//           style={{
//             flexDirection: "row",
//             marginTop: 10,
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{}}>Morning</Text>

//           <Chip
//             label="Mon 18"
//             color="#FF6363"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Tue 19"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Wed 20"
//             color="#FF6363"
//             style={{ flexDirection: "column" }}
//           />
//         </Stack>
//         <Stack
//           spacing={8}
//           style={{
//             flexDirection: "row",
//             marginTop: 10,
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{}}>Afternoon</Text>

//           <Chip
//             label="Mon 18"
//             color="#FF6363"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Tue 19"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Wed 20"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//         </Stack>
//         <AppBar
//           title="Rebecca Guiyana"
//           subtitle="Paris 18eme arrondissement
//         France"
//           style={{}}
//           leading={(props) => <Avatar label="Rebecca Guiyana" autoColor />}
//           trailing={(props) => (
//             <Rating
//               type="star"
//               ratingCount={5}
//               ratingTextColor="red"
//               imageSize={20}
//               ratingColor="#3498db"
//               ratingBackgroundColor=""
//             />
//           )}
//         />
//         <Text style={{ marginLeft: 110 }}>Next disponibility</Text>
//         <Stack
//           spacing={8}
//           style={{
//             flexDirection: "row",
//             marginTop: 10,
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{}}>Morning</Text>

//           <Chip
//             label="Mon 18"
//             color="#FF6363"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Tue 19"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Wed 20"
//             color="#FF6363"
//             style={{ flexDirection: "column" }}
//           />
//         </Stack>
//         <Stack
//           spacing={8}
//           style={{
//             flexDirection: "row",
//             marginTop: 10,
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{}}>Afternoon</Text>

//           <Chip
//             label="Mon 18"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Tue 19"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//           <Chip
//             label="Wed 20"
//             color="green"
//             style={{ flexDirection: "column" }}
//           />
//         </Stack>
//       </View>
//     </ImageBackground>
//   </View>
// );

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

export default SearchGuide;
