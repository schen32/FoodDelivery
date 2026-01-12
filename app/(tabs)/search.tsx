import seed from "@/lib/seed";
import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const search = () => {
  return (
    <SafeAreaView>
      <Text>Search</Text>
      <Button
        title="seed"
        onPress={() =>
          seed().catch((error) =>
            console.log("Failed to seed database.", error)
          )
        }
      ></Button>
    </SafeAreaView>
  );
};

export default search;

const styles = StyleSheet.create({});
