import { colors } from "@/theme/colors";
import { CustomInputProps } from "@/type";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const customInput = ({
  placeholder = "Enter Text",
  value,
  onChangeText,
  label,
  secureTextEntry,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputView}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor="#888"
        style={[
          styles.input,
          isFocused ? styles.focusedInput : styles.blurredInput,
        ]}
      ></TextInput>
    </View>
  );
};

export default customInput;

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    textAlign: "left",
    width: "100%",
    fontFamily: "quicksand-medium",
    color: "#6b7280",
    paddingLeft: 10,
  },
  input: {
    borderRadius: 8, // 0.5rem = 8px
    padding: 12, // 0.75rem = 12px
    width: "100%",
    fontSize: 16, // 1rem = 16px
    fontFamily: "quicksand-semibold",
    color: colors.dark[100],
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    lineHeight: 20, // 16 * 1.25
  },
  focusedInput: {
    borderColor: colors.primary,
  },
  blurredInput: {
    borderColor: "#D1D5DB",
  },
});
