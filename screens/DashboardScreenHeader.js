import React from "react";
import { View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function DashboardScreenHeader({ navigeta }) {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          margin: 16,
        }}
      >
        <FontAwesome5
          name="bars"
          size={24}
          color="#261f0e"
          onPress={() => navigeta.openDrawer()}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "10%",
    backgroundColor: "green",
  },
});
