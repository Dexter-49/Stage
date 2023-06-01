import React from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useMutation}from '@tanstack/react-query'
import { Grid } from "@mui/material";
import axios from "axios";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const AuthLogin = () => {
  const navigate=useNavigate();
  const login=useMutation({
    mutationFn:(data)=>{
      return axios.post('/api/token/',data)
    },
    onSuccess:({data})=>{
      localStorage.setItem('token',data?.access)
    }
  })
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login.mutate(values);
    if(login.isSuccess){
      navigate('/admin/users/')
    }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            type="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthLogin;
