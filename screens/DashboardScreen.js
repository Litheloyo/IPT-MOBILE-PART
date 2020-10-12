import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import DashboardScreenHeader from "./DashboardScreenHeader";

const DashBoardScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <DashboardScreenHeader style={styles.header} navigeta={navigation} />
      <View style={styles.content}>
        <Text>DashBoard</Text>
        <Button onPress={(e) => handlePress()} />
      </View>
    </View>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 12,
  },
});
