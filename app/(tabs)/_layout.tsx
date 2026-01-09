import { Redirect, Slot } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) return <Redirect href="/sign-in"></Redirect>;

  return <Slot></Slot>;
};

export default _layout;

const styles = StyleSheet.create({});
