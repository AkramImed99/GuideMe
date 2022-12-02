import React, { Component } from "react";
import { View, Text } from "react-native";
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
  Provider,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

class GuideAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false,
      visible: false,
      contract: false,
      toggleCheckBox: false,
    };
  }

  render() {
    return (
      <Backdrop
        revealed={this.state.revealed}
        header={
          <AppBar
            style={{ marginTop: 38 }}
            title="Rafik Meziane"
            subtitle="Take an appointment with Rafik "
            centerTitle={true}
            transparent
            leading={(props) => (
              <IconButton icon={(props) => <Avatar label="D J" autoColor />} />
            )}
          />
        }
        backLayer={<View style={{ height: 120 }} />}
      >
        <Text style={{ marginTop: 10, marginLeft: 15 }}>Select date time</Text>
        <View style={{ marginTop: 50 }}>
          <Button
            title="Thursday 03 December"
            style={{ margin: 6 }}
            onPress={() =>
              this.setState({
                visible: true,
              })
            }
          />
          <Button
            title="Friday 04 December"
            style={{ margin: 6 }}
            onPress={() =>
              this.setState({
                visible: true,
              })
            }
          />
          <Button
            title="Saturday 05 DECEMBER"
            style={{ margin: 6 }}
            onPress={() =>
              this.setState({
                visible: true,
              })
            }
          />
          <Button
            title="Sunday 06 DECEMBER"
            style={{ margin: 6 }}
            onPress={() =>
              this.setState({
                visible: true,
              })
            }
          />
          <Button
            title="Monday 07 DECEMBER"
            style={{ margin: 6 }}
            onPress={() =>
              this.setState({
                visible: true,
              })
            }
          />
          <Button
            title="Tuesday 08 DECEMBER"
            style={{ margin: 6 }}
            onPress={() =>
              this.setState({
                visible: true,
              })
            }
          />
          <Dialog
            visible={this.state.visible}
            onDismiss={() =>
              this.setState({
                visible: false,
              })
            }
          >
            <DialogHeader title="Disponibilities" />
            <DialogContent>
              <Stack
                spacing={4}
                style={{
                  flexDirection: "row",
                  marginTop: 0,
                  justifyContent: "center",
                }}
              >
                <Chip
                  label="10:30"
                  color="#FF6363"
                  variant="outlined"
                  style={{ flexDirection: "column" }}
                  onPress={() =>
                    this.setState({
                      contract: true,
                    })
                  }
                />
                <Chip
                  label="13:00"
                  color="#FF6363"
                  variant="outlined"
                  style={{ flexDirection: "column" }}
                  onPress={() =>
                    this.setState({
                      contract: true,
                    })
                  }
                />
                <Chip
                  label="15:30"
                  color="#FF6363"
                  variant="outlined"
                  style={{ flexDirection: "column" }}
                  onPress={() =>
                    this.setState({
                      contract: true,
                    })
                  }
                />
              </Stack>
              <Text
                visible={this.state.contract}
                onDismiss={() =>
                  this.setState({
                    contract: true,
                  })
                }
              >
                Appointement with Rafik MEZIANE to vist the “Paris Musical
                Museum”
              </Text>
            </DialogContent>
            <DialogActions>
              <Button
                title="Cancel"
                compact
                variant="text"
                onPress={() =>
                  this.setState({
                    visible: true,
                  })
                }
              />
              <Button
                title="Ok"
                compact
                variant="text"
                onPress={() =>
                  this.setState({
                    visible: true,
                  })
                }
              />
            </DialogActions>
          </Dialog>
        </View>
        <Button
          variant="outlined"
          title="Display more dates"
          leading={(props) => (
            <MaterialIcons name="date-range" size={24} color="black" />
          )}
          style={{ marginLeft: 30, marginTop: 50, width: 300 }}
        />
      </Backdrop>
    );
  }
}

const App = () => {
  // const [revealed, setRevealed] = useState(false);
  // const [visible, setVisible] = useState(false);
  // const [contract, setContract] = useState(false);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // return (
  //   <Backdrop
  //     revealed={revealed}
  //     header={
  //       <AppBar
  //         style={{ marginTop: 38 }}
  //         title="Rafik Meziane"
  //         subtitle="Take an appointment with Rafik "
  //         centerTitle={true}
  //         transparent
  //         leading={(props) => (
  //           <IconButton icon={(props) => <Avatar label="D J" autoColor />} />
  //         )}
  //       />
  //     }
  //     backLayer={<View style={{ height: 120 }} />}
  //   >
  //     <Text style={{ marginTop: 10, marginLeft: 15 }}>Select date time</Text>
  //     <View style={{ marginTop: 50 }}>
  //       <Button
  //         title="Thursday 03 December"
  //         style={{ margin: 6 }}
  //         onPress={() => setVisible(true)}
  //       />
  //       <Button
  //         title="Friday 04 December"
  //         style={{ margin: 6 }}
  //         onPress={() => setVisible(true)}
  //       />
  //       <Button
  //         title="Saturday 05 DECEMBER"
  //         style={{ margin: 6 }}
  //         onPress={() => setVisible(true)}
  //       />
  //       <Button
  //         title="Sunday 06 DECEMBER"
  //         style={{ margin: 6 }}
  //         onPress={() => setVisible(true)}
  //       />
  //       <Button
  //         title="Monday 07 DECEMBER"
  //         style={{ margin: 6 }}
  //         onPress={() => setVisible(true)}
  //       />
  //       <Button
  //         title="Tuesday 08 DECEMBER"
  //         style={{ margin: 6 }}
  //         onPress={() => setVisible(true)}
  //       />
  //       <Dialog visible={visible} onDismiss={() => setVisible(false)}>
  //         <DialogHeader title="Disponibilities" />
  //         <DialogContent>
  //           <Stack
  //             spacing={4}
  //             style={{
  //               flexDirection: "row",
  //               marginTop: 0,
  //               justifyContent: "center",
  //             }}
  //           >
  //             <Chip
  //               label="10:30"
  //               color="#FF6363"
  //               variant="outlined"
  //               style={{ flexDirection: "column" }}
  //               onPress={() => setContract(true)}
  //             />
  //             <Chip
  //               label="13:00"
  //               color="#FF6363"
  //               variant="outlined"
  //               style={{ flexDirection: "column" }}
  //               onPress={() => setContract(true)}
  //             />
  //             <Chip
  //               label="15:30"
  //               color="#FF6363"
  //               variant="outlined"
  //               style={{ flexDirection: "column" }}
  //               onPress={() => setContract(true)}
  //             />
  //           </Stack>
  //           <Text visible={contract} onDismiss={() => setContract(false)}>
  //             Appointement with Rafik MEZIANE to vist the “Paris Musical Museum”
  //           </Text>
  //         </DialogContent>
  //         <DialogActions>
  //           <Button
  //             title="Cancel"
  //             compact
  //             variant="text"
  //             onPress={() => setVisible(false)}
  //           />
  //           <Button
  //             title="Ok"
  //             compact
  //             variant="text"
  //             onPress={() => setVisible(false)}
  //           />
  //         </DialogActions>
  //       </Dialog>
  //     </View>
  //     <Button
  //       variant="outlined"
  //       title="Display more dates"
  //       leading={(props) => (
  //         <MaterialIcons name="date-range" size={24} color="black" />
  //       )}
  //       style={{ marginLeft: 30, marginTop: 50, width: 300 }}
  //     />
  //   </Backdrop>
  // );
};
const GuideAgendaa = () => (
  <Provider>
    <GuideAgenda />
  </Provider>
);

export default GuideAgendaa;
