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
import axios from "axios";
import { useState, useEffect } from "react";
import _ from "lodash";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { connect } from "react-redux";
import { registerUsers } from "../actions/register_users";

const SignInScreen = ({ navigation, registerUsers, reguser }) => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setCPassword] = useState("");
  const [data, setData] = useState({
    password_confirmation: "",
    check_textInputChange: false,
    secureTextEntry: "true",
    confirm_secureTextEntry: "true",
  });
  useEffect(() => {
    console.log(reguser);
    if (reguser.isRegistered) {
      navigation.navigate("Dashboard");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUsers({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    });
  };

  //   const setFirstname = (first_name) => {
  //     if (first_name.length !== 0) {
  //       setData({
  //         ...data,
  //         first_name: first_name,
  //         check_textInputChange: true,
  //       });
  //     } else {
  //       setData({
  //         ...data,
  //         first_name: first_name,
  //         check_textInputChange: false,
  //       });
  //     }
  //   };

  //   const setLastname = (last_name) => {
  //     if (last_name.length !== 0) {
  //       setData({
  //         ...data,
  //         last_name: last_name,
  //         check_textInputChange: true,
  //       });
  //     } else {
  //       setData({
  //         ...data,
  //         last_name: last_name,
  //         check_textInputChange: false,
  //       });
  //     }
  //   };

  //   const setEmail = (email) => {
  //     if (email.length !== 0) {
  //       setData({
  //         ...data,
  //         email: email,
  //         check_textInputChange: true,
  //       });
  //     } else {
  //       setData({
  //         ...data,
  //         email: email,
  //         check_textInputChange: false,
  //       });
  //     }
  //   };

  //   const setPassword = (password) => {
  //     setData({
  //       ...data,
  //       password: password,
  //     });
  //   };

  //   const setCPassword = (val) => {
  //     setData({
  //       ...data,
  //       password_confirmation: val,
  //     });
  //   };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#b3aaa3" barStyle="light-content" />
      <View style={styles.header}>
        {reguser.isRegistered ? (
          <Text>Hello</Text>
        ) : (
          <Text style={styles.text_header}>Register Now!</Text>
        )}
        {/* <Text style={styles.text_header}>Register Now!</Text> */}
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>First name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#261f0e" size={20} />
            <TextInput
              type="name"
              name="first_name"
              placeholder="Your first name"
              style={styles.textInput}
              autoCapitalize="none"
              onChange={(e) => setFirstname(e.target.value)}
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
                marginTop: 20,
              },
            ]}
          >
            Last Name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#261f0e" size={20} />
            <TextInput
              type="name"
              name="last_name"
              placeholder="Your last name"
              style={styles.textInput}
              autoCapitalize="none"
              onChange={(e) => setLastname(e.target.value)}
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
                marginTop: 20,
              },
            ]}
          >
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="envelope" color="#261f0e" size={20} />
            <TextInput
              type="email"
              name="email"
              placeholder="Your email"
              style={styles.textInput}
              autoCapitalize="none"
              onChange={(e) => setEmail(e.target.value)}
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
                marginTop: 20,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#261f0e" size={20} />
            <TextInput
              type="password"
              name="password"
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#261f0e" size={20} />
            <TextInput
              type="password"
              name="password_confirmation"
              keyboardType="numeric"
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChange={(e) => setCPassword(e.target.value)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={(e) => handleSubmit(e)}
            >
              <LinearGradient
                colors={["#8D6E63", "#BDBDBD"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: "#261f0e",
                  borderWidth: 1,
                  marginTop: 10,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#261f0e",
                  },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  reguser: state.reguser,
});

export default connect(mapStateToProps, { registerUsers })(SignInScreen);

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
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
