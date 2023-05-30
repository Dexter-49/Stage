import { TableCell, TableContainer, TableHead } from "@mui/material";
import React from "react";

export default function ListUser() {
  return (
    <TableContainer>
      <TableHead>
        <TableCell>id</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Prenom</TableCell>
        <TableCell>nom</TableCell>
        <TableCell>d</TableCell>
      </TableHead>
    </TableContainer>
  );
}
