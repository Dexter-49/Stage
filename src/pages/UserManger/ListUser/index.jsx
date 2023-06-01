import {
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  Table,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Grid,
  Box,
  TableRow,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useToggle from "../../../Hooks/useToggle";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ListUser() {
  const { state, toggle } = useToggle();
  const createUser = useMutation({
    mutationFn: (data) => {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      return axios.post("/auth/users/", data, { headers });
    },
    onSuccess: () => {
      toggle();
      refetch();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      division: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createUser.mutate(values);
    },
  });
  const { data, refetch } = useQuery({
    queryKey: ["get", "users"],
    queryFn: () => {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      return axios.get("/api/admin/users/", { headers });
    },
  });
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Prenom</TableCell>
              <TableCell>nom</TableCell>
              <TableCell align="right">
                <Button onClick={toggle}>Add User</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((item, key) => {
              return (
                <>
                  <TableRow>
                    <TableCell>{item?.id}</TableCell>
                    <TableCell>{item?.username}</TableCell>
                    <TableCell>{item?.first_name}</TableCell>
                    <TableCell>{item?.last_name}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={state} onClose={toggle}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="first_name"
                  name="first_name"
                  label="First Name"
                  type="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="last_name"
                  name="last_name"
                  label="First Name"
                  type="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.last_name && Boolean(formik.errors.last_name)
                  }
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </Grid>
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
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
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
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginLeft: 2,
                  }}
                >
                  <Button onClick={toggle}>Cancel</Button>
                  <Button type="submit" variant="contained" color="primary">
                    Add
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
