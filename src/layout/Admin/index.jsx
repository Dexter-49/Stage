import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  Toolbar,
  Divider
} from "@mui/material";

function Admin() {
  const items = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["users", "Document", "logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`/admin/${text}`}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Drawer
      open={true}
      variant="permanent"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      {items}
    </Drawer>
  );
}

export default Admin;
