import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import { images } from "@/constants";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const _layout = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.imageBackgroundView}>
          <ImageBackground
            style={styles.imageBackground}
            source={images.loginGraphic}
            resizeMode="contain"
          ></ImageBackground>
          <Image style={styles.imageLogo} source={images.logo}></Image>
        </View>

        <CustomInput
          placeholder="Enter your email"
          value={""}
          onChangeText={() => {}}
          label="Email"
          secureTextEntry={false}
          keyboardType="email-address"
        ></CustomInput>
        <CustomButton></CustomButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default _layout;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
    height: "100%",
  },
  imageBackgroundView: {
    width: "100%",
    position: "relative",
    height: Dimensions.get("screen").height / 2.25,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  imageLogo: {
    alignSelf: "center",
    width: 150,
    height: 150,
    position: "absolute",
    bottom: -40,
  },
});
