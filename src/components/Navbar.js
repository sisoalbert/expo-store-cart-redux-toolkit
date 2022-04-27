import { StyleSheet, Text, View } from "react-native";
import React from "react";
//import Ionicons from expo vector icons
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  //entire store - amount is destructured
  const { amount } = useSelector((store) => store.cart);
  // console.log(
  //   useSelector((store) => {
  //     console.log(store);
  //   })
  // );

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "coral",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <View>
        <Text>Redux toolkit</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "coral",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="ios-cart" size={24} color="black" />
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
