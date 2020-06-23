import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "../components/form";
import { defaultStyles } from "../config";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().max(100).label("Full Name"),
  email: Yup.string().required().email().max(25).label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});
function RegisterScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../asset/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "", fullName: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="fullName"
          autoCapitalise="none"
          icon="human"
          placeholder="Enter Full Name"
          autoCorrect={false}
          keyboardType="text"
          maxLength={25}
        />
        <AppFormField
          name="email"
          autoCapitalise="none"
          icon="email-outline"
          placeholder="Enter Email"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          maxLength={25}
        />
        <AppFormField
          name="password"
          autoCapitalise="none"
          icon="lock-outline"
          placeholder="Enter Password"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
        <AppSubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: defaultStyles.Colors.background,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});