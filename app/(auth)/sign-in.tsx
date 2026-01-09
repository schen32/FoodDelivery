import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const signIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Button
        title="Sign Up"
        onPress={() => {
          router.push("/sign-up");
        }}
      ></Button>
      <Button
        title="Home Screen"
        onPress={() => {
          router.push("/");
        }}
      ></Button>
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({});
