import { Slot } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  return (
    <SafeAreaView>
      <Slot></Slot>
    </SafeAreaView>
  );
};

export default _layout;

const styles = StyleSheet.create({});
