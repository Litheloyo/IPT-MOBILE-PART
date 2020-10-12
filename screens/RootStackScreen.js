import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

// import Home from './Home';
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import DashBoardScreen from "./DashboardScreen";
import Dashboard_Navigator from "../Navigators/Dashboard_Navigator";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    {/* <RootStack.Screen name="Home" component={Home}/> */}
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="Dashboard" component={Dashboard_Navigator} />
  </RootStack.Navigator>
);

export default RootStackScreen;
