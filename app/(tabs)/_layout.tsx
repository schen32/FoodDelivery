import useAuthStore from "@/store/auth.store";
import { Redirect, Slot } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const tabLayout = () => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Redirect href="/sign-in"></Redirect>;

  return <Slot></Slot>;
};

export default tabLayout;

const styles = StyleSheet.create({});
