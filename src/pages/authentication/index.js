import React from "react";
import { Paper } from "@mui/material";
import AuthLogin from "./formulaire/loginFormilaire";

const Login = () => {
  return (
    <Paper
      sx={{
        padding: 10,
        alignSelf: "center",
        maxHeight: 150,
        maxWidth: 200,
        justifySelf: "center",
      }}
    >
      <AuthLogin />
    </Paper>
  );
};

export default Login;
