import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/DashboardScreen";
import Arrival_NoteScreen from "../screens/Arrival_NoteScreen";
import Arrival_DetailsScreen from "../screens/Arrival_DetailsScreen";
import { DrawerContent } from "../screens/SideBar";

const Drawer = createDrawerNavigator();

export default function Dashboard_Navigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Arrival Note" component={Arrival_NoteScreen} />
      <Drawer.Screen name="Arrival Details" component={Arrival_DetailsScreen} />
      {/* <Drawer.Screen name="Logout" component={LogOutScreen} /> */}
    </Drawer.Navigator>
  );
}
