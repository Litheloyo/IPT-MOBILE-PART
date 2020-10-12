import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useState, useEffect } from "react";

import { useTheme } from "react-native-paper";

import { AuthContext } from "../components/context";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

// import Users from '../model/users';

const SignInScreen = ({ navigation, loginUser, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    // isValidUser: true,
    // isValidPassword: true,
  });
  useEffect(() => {
    console.log(auth);
    if (auth.isAuthenticated) {
      navigation.navigate("Dashboard");
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email: email,
      password: password,
    });
    // axios
    //   .post("http://localhost:8000/api/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => console.log(err));
  };
  const { colors } = useTheme();

  //   const { signIn } = React.useContext(AuthContext);

  //   const textInputChange = (val) => {
  //     if (val.trim().length >= 4) {
  //       setData({
  //         ...data,
  //         email: val,
  //         check_textInputChange: true,
  //         isValidUser: true,
  //       });
  //     } else {
  //       setData({
  //         ...data,
  //         email: val,
  //         check_textInputChange: false,
  //         isValidUser: false,
  //       });
  //     }
  //   };

  //   const handlePasswordChange = (val) => {
  //     if (val.trim().length >= 8) {
  //       setData({
  //         ...data,
  //         password: val,
  //         isValidPassword: true,
  //       });
  //     } else {
  //       setData({
  //         ...data,
  //         password: val,
  //         isValidPassword: false,
  //       });
  //     }
  //   };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  //   const handleValidUser = (val) => {
  //     if (val.trim().length >= 4) {
  //       setData({
  //         ...data,
  //         isValidUser: true,
  //       });
  //     } else {
  //       setData({
  //         ...data,
  //         isValidUser: false,
  //       });
  //     }
  //   };

  //     const foundUser = Users.filter((item) => {
  //       return email == item.email && password == item.password;
  //     });

  //     if (data.email.length == 0 || data.password.length == 0) {
  //       Alert.alert(
  //         "Wrong Input!",
  //         "Username or password field cannot be empty.",
  //         [{ text: "Okay" }]
  //       );
  //       return;
  //     }

  //     if (foundUser.length == 0) {
  //       Alert.alert("Invalid User!", "email or password is incorrect.", [
  //         { text: "Okay" },
  //       ]);
  //       return;
  //     }
  //     signIn(foundUser);
  //   };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#b3aaa3" barStyle="light-content" />
      <View style={styles.header}>
        {auth.isAuthenticating ? (
          <Text> Is Authenticating...</Text>
        ) : (
          <Text style={styles.text_header}>Welcome!</Text>
        )}
        {/* <Text style={styles.text_header}>Welcome!</Text> */}
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="envelope" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChange={(e) => setEmail(e.target.value)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
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
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#261f0e", marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
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
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            style={[
              styles.signIn,
              {
                borderColor: "#261f0e",
                borderWidth: 1,
                marginTop: 15,
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
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  loginUser,
})(SignInScreen);

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
    flex: 3,
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
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#261f0e",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
});
