import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import { colors } from "@/theme/colors";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const signIn = () => {
  return (
    <View style={styles.inputView}>
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

      <View style={styles.signUpView}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Link href="/sign-up" style={styles.signUpLink}>
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({
  inputView: {
    gap: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },

  signUpView: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  signUpText: {
    color: "#6b7280",
    fontSize: 16,
    fontFamily: "quicksand-regular",
  },
  signUpLink: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: "quicksand-bold",
  },
});
