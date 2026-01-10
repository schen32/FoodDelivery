import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import { colors } from "@/theme/colors";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

const signIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Email address and password are required");
      return;
    }

    setIsSubmitting(true);
    try {
      // call appwrite sign in

      Alert.alert("Success", "User signed in successfully");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.inputView}>
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }));
        }}
        label="Email"
        secureTextEntry={false}
        keyboardType="email-address"
      ></CustomInput>

      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, password: text }));
        }}
        label="Password"
        secureTextEntry={true}
      ></CustomInput>

      <CustomButton
        title="Sign In"
        isLoading={isSubmitting}
        onPress={submit}
      ></CustomButton>

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
