import React, { useState, Component } from "react";
import { View, Text, Image } from "react-native";
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
  Avatar,
  Stack,
  Button,
  Chip,
  ListItem,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

class GuideProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { revealed: false };
  }

  render() {
    return (
      <Backdrop
        revealed={this.state.revealed}
        header={
          <AppBar
            style={{ marginTop: 38, height: 120 }}
            title="Rafik Meziane"
            subtitle="Guide musical"
            centerTitle={true}
            transparent
            leading={(props) => (
              <IconButton
                style={{ marginTop: 110, marginLeft: 150 }}
                icon={(props) => <Avatar label="D J" autoColor />}
              />
            )}
          />
        }
        backLayer={<View style={{ height: 120 }} />}
      >
        <Button
          title="SEE MY APPOINTMENT"
          color="#FF6363"
          leading={(props) => <Icon name="calendar" {...props} />}
          onPress={() => this.props.navigation.navigate("GuideAgendaa")}
        />
        <BackdropSubheader
          title="Paris 75013, France"
          leading={(props) => (
            <Entypo name="location" size={24} color="black" />
          )}
        />
        <BackdropSubheader
          title="Payment method: Debit Card, Paypal"
          leading={(props) => (
            <Ionicons name="logo-euro" size={24} color="black" />
          )}
        />
        <BackdropSubheader
          leading={(props) => (
            <Stack
              spacing={4}
              style={{
                flexDirection: "row",
                marginTop: 0,
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="puzzle-piece"
                size={24}
                color="black"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Musical trips"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Musical festival"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
              <Chip
                label="Rap"
                color="#FF6363"
                style={{ flexDirection: "column" }}
              />
            </Stack>
          )}
        />
        <ListItem
          title="Presentation"
          leading={<Feather name="align-left" size={24} color="black" />}
          trailing={(props) => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Disponibility and contacts"
          leading={
            <Ionicons name="md-hourglass-sharp" size={24} color="black" />
          }
          trailing={(props) => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Language"
          leading={
            <MaterialCommunityIcons
              name="flag-variant"
              size={24}
              color="black"
            />
          }
          trailing={(props) => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Activity"
          leading={
            <MaterialCommunityIcons
              name="transit-detour"
              size={24}
              color="black"
            />
          }
          trailing={(props) => <Icon name="chevron-right" {...props} />}
        />
        <View>
          <Image
            style={{ width: 360, height: 200 }}
            source={require("./img/chris-karidis-nnzkZNYWHaU-unsplash.jpg")}
          />
        </View>
      </Backdrop>
    );
  }
}

// const App = () => {
//   const [revealed, setRevealed] = useState(false);
//   return (
//     <Backdrop
//       revealed={revealed}
//       header={
//         <AppBar
//           style={{ marginTop: 38, height: 120 }}
//           title="Rafik Meziane"
//           subtitle="Guide musical"
//           centerTitle={true}
//           transparent
//           leading={(props) => (
//             <IconButton
//               style={{ marginTop: 110, marginLeft: 150 }}
//               icon={(props) => <Avatar label="D J" autoColor />}
//             />
//           )}
//         />
//       }
//       backLayer={<View style={{ height: 120 }} />}
//     >
//       <Button
//         title="SEE MY APPOINTMENT"
//         color="#FF6363"
//         leading={(props) => <Icon name="calendar" {...props} />}
//       />
//       <BackdropSubheader
//         title="Paris 75013, France"
//         leading={(props) => <Entypo name="location" size={24} color="black" />}
//       />
//       <BackdropSubheader
//         title="Payment method: Debit Card, Paypal"
//         leading={(props) => (
//           <Ionicons name="logo-euro" size={24} color="black" />
//         )}
//       />
//       <BackdropSubheader
//         leading={(props) => (
//           <Stack
//             spacing={4}
//             style={{
//               flexDirection: "row",
//               marginTop: 0,
//               justifyContent: "center",
//             }}
//           >
//             <FontAwesome
//               name="puzzle-piece"
//               size={24}
//               color="black"
//               style={{ flexDirection: "column" }}
//             />
//             <Chip
//               label="Musical trips"
//               color="#FF6363"
//               style={{ flexDirection: "column" }}
//             />
//             <Chip
//               label="Musical festival"
//               color="#FF6363"
//               style={{ flexDirection: "column" }}
//             />
//             <Chip
//               label="Rap"
//               color="#FF6363"
//               style={{ flexDirection: "column" }}
//             />
//           </Stack>
//         )}
//       />
//       <ListItem
//         title="Presentation"
//         leading={<Feather name="align-left" size={24} color="black" />}
//         trailing={(props) => <Icon name="chevron-right" {...props} />}
//       />
//       <ListItem
//         title="Disponibility and contacts"
//         leading={<Ionicons name="md-hourglass-sharp" size={24} color="black" />}
//         trailing={(props) => <Icon name="chevron-right" {...props} />}
//       />
//       <ListItem
//         title="Language"
//         leading={
//           <MaterialCommunityIcons name="flag-variant" size={24} color="black" />
//         }
//         trailing={(props) => <Icon name="chevron-right" {...props} />}
//       />
//       <ListItem
//         title="Activity"
//         leading={
//           <MaterialCommunityIcons
//             name="transit-detour"
//             size={24}
//             color="black"
//           />
//         }
//         trailing={(props) => <Icon name="chevron-right" {...props} />}
//       />
//       <View>
//         <Image
//           style={{ width: 360, height: 200 }}
//           source={require("./img/chris-karidis-nnzkZNYWHaU-unsplash.jpg")}
//         />
//       </View>
//     </Backdrop>
//   );
// };

export default GuideProfile;
