import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const signUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Button
        title="Sign In"
        onPress={() => {
          router.push("/sign-in");
        }}
      ></Button>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({});
