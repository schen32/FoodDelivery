import { images } from "@/constants";
import { colors } from "@/theme/colors";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const cartButton = () => {
  const totalItems = 10;

  return (
    <TouchableOpacity style={styles.button}>
      <Image
        style={styles.icon}
        source={images.bag}
        resizeMode="contain"
      ></Image>

      {totalItems > 0 && (
        <View style={styles.numItems}>
          <Text style={styles.numItemsText}>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default cartButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark[100],
    position: "relative",
    borderRadius: 9999,
    padding: 10,
  },
  icon: {
    tintColor: "white",
    height: 25,
    width: 25,
  },
  numItems: {
    backgroundColor: colors.primary,
    borderRadius: 9999,
    position: "absolute",
    right: 0,
    top: 0,
    width: 20,
    height: 20,
    alignItems: "center",
  },
  numItemsText: {
    fontSize: 10,
    fontFamily: "quicksand-bold",
    color: "white",
    lineHeight: 15,
  },
});
