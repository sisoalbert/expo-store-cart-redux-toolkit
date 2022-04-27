import { StatusBar } from "expo-status-bar";
//import react and useEffect
import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
//import safearea from expo-safe-area-view
import { SafeAreaView } from "react-native-safe-area-context";

// import store
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

//import Navbar
import Navbar from "./src/components/Navbar";
//import CartContainer.js
import CartContainer from "./src/components/CartContainer";

import { useSelector, useDispatch } from "react-redux";
import {
  calculateTotals,
  getCartItems,
} from "./src/redux/features/cart/cartSlice";

const RootApp = () => {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  // console.log(cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView>
        <Navbar />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
          }}
        >
          <ActivityIndicator size="large" color="coral" />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Navbar />
      <CartContainer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
