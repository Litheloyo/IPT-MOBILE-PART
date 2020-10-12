import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import _ from "lodash";
import { Button, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import { viewUsers } from "../actions/getUser";

export function Arrival_DetailsScreen({ viewUsers, users }) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const loadedUsers = users.users;
  useEffect(() => {
    viewUsers();
    //   axios
    //     .get("http://127.0.0.1:8000/api/users")
    //     .then((res) => {
    //       const result = res || [
    //         { email: "nothing in there" },
    //         { email: "yaah" },
    //       ];
    //       setData(res.data);
    //     })
    //     .catch((err) => {
    //       const result = err || [{ email: "error in there" }, { email: "naaah" }];
    //       setData(err.response.data);
    //     });
  });

  function onBackPressed() {
    navigation.goBack();
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={() => onBackPressed()} title="Go back home" />
      {!_.isEmpty(loadedUsers) &&
        loadedUsers.map((user) => <Text key={user.id}>{user.email}</Text>)}
    </View>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps, { viewUsers })(Arrival_DetailsScreen);

const styles = StyleSheet.create({
  list: {
    backgroundColor: "red",
  },
});
