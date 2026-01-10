import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import React from "react";
import { StyleSheet, View } from "react-native";

const signIn = () => {
  return (
    <View style={styles.view}>
      <CustomInput
        placeholder="Enter your email"
        value={""}
        onChangeText={() => {}}
        label="Email"
        secureTextEntry={false}
        keyboardType="email-address"
      ></CustomInput>

      <CustomInput
        placeholder="Enter your password"
        value={""}
        onChangeText={() => {}}
        label="Password"
        secureTextEntry={true}
      ></CustomInput>

      <CustomButton title="Sign In"></CustomButton>
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({
  view: {
    gap: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },
});
