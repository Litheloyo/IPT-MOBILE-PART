import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import DashboardScreen from "./screens/DashboardScreen";
import RootStackNavigator from "./screens/RootStackScreen";
import Arrival_DetailsScreen from "./screens/Arrival_DetailsScreen";
import Arrival_NoteScreen from "./screens/Arrival_NoteScreen";
import LogOutScreen from "./screens/SignUpScreen";
import { DrawerContent } from "./screens/SideBar";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "./components/context";
import { TouchableOpacity } from "react-native-gesture-handler";

import { FontAwesome5 } from "@expo/vector-icons";
import Arrival2 from "./screens/Arrival2";
import { connect, Provider } from "react-redux";
import Store from "./Store";
// import Home from './screens/Home';

// const DashboardStack = createStackNavigator();

// const DashboardStackScreen = ({ navigation }) => (
//   <DashboardStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#b3aaa3",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <DashboardStack.Screen
//       name="Dashboard"
//       component={DashboardScreen}
//       options={{
//         headerLeft: () => (
//           <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }}>
//             <FontAwesome5
//               name="bars"
//               size={24}
//               color="#261f0e"
//               onPress={() => navigation.openDrawer()}
//             />
//           </TouchableOpacity>
//         ),
//       }}
//     />
//   </DashboardStack.Navigator>
// );

// const Arrival_NoteStack = createStackNavigator();

// const Arrival_NoteStackScreen = ({ navigation }) => (
//   <Arrival_NoteStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#b3aaa3",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <Arrival_NoteStack.Screen
//       name="Arrival Note"
//       component={Arrival_NoteScreen}
//       options={{
//         headerLeft: () => (
//           <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }}>
//             <FontAwesome5
//               name="bars"
//               size={24}
//               color="#261f0e"
//               onPress={() => navigation.openDrawer()}
//             />
//           </TouchableOpacity>
//         ),
//       }}
//     />
//     <Arrival_NoteStack.Screen
//       name="Arrival Note 2"
//       component={Arrival2}
//       options={{
//         headerLeft: () => (
//           <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }}>
//             <FontAwesome5
//               name="bars"
//               size={24}
//               color="#261f0e"
//               onPress={() => navigation.openDrawer()}
//             />
//           </TouchableOpacity>
//         ),
//       }}
//     />
//   </Arrival_NoteStack.Navigator>
// );

const Main = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Main);
