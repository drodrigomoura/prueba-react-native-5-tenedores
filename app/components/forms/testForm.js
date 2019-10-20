import React from "react";
import t from "tcomb-form-native";
const Form = t.form.Form;

export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      label: "Usuario (*)",
      placeholder: "Usuario"
    },
    password: {
      label: "Contraseña (*)",
      placeholder: "Contraseña",
      password: true,
      secureTextEntry: true
    }
  }
};
