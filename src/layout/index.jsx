import React from "react";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import { setUser } from "../store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Admin from "./Admin";
import { useDispatch, useSelector } from "react-redux";

function Layout() {
  const dispatch = useDispatch();
  const {} = useQuery({
    queryKey: ["current", "get"],
    queryFn: () => {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      return axios.get("/auth/users/me/", { headers }).then((res) => {
        dispatch(setUser(res.data));
      });
    },
  });
  const { user } = useSelector((state) => state.user);
  return (
    <Box>
      <Admin/>
      <Outlet />
    </Box>
  );
}

export default Layout;
