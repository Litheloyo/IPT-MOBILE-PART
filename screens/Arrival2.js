import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RNPickerSelect from "react-native-picker-select";

const Arrival2 = ({ navigation }) => {
  const [data, setData] = React.useState({
    first_name: "",
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#b3aaa3" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>FILL IN YOUR IPT DETAILS!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 40,
              },
            ]}
          >
            Department:
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#261f0e" size={20} />
            <RNPickerSelect
              placeholder="Choose your department"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textFirstChange(val)}
              items={[
                { label: "Mechanical", value: "Mechanical" },
                { label: "Information and communication TEch", value: "ICT" },
                { label: "Computer Science and Engineering", value: "CSE" },
              ]}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="261f0e" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 40,
              },
            ]}
          >
            Name of Firm:
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#261f0e" size={20} />
            <TextInput
              placeholder="Name of the Firm"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textFirstChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="261f0e" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 40,
              },
            ]}
          >
            Firm's Address:
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#261f0e" size={20} />
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Arusha", value: "ARS" },
                { label: "Mwanza", value: "MZA" },
                { label: "Mbeya", value: "MBY" },
                { label: "Shinyanga", value: "SHY" },
                { label: "Morogoro", value: "MORO" },
              ]}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="261f0e" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.push("Arrival Note 2")}>
              <LinearGradient
                colors={["#8D6E63", "#BDBDBD"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Next</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={10} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Arrival2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b3aaa3",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#261f0e",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#261f0e",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#261f0e",
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
});
