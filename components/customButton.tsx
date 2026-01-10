import { colors } from "@/theme/colors";
import { CustomButtonProps } from "@/type";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const customButton = ({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.customBtn} onPress={onPress}>
      {leftIcon}

      <View style={styles.loadingView}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white"></ActivityIndicator>
        ) : (
          <Text style={styles.loadingText}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default customButton;

const styles = StyleSheet.create({
  customBtn: {
    backgroundColor: colors.primary,
    borderRadius: 9999, // fully rounded pill
    padding: 12, // 0.75rem = 12px
    width: "100%",
    alignItems: "center", // RN uses alignItems, not justify-content for horizontal centering
    justifyContent: "center",
  },
  loadingView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "white",
    fontSize: 16,
    fontFamily: "quicksand-semibold",
  },
});
