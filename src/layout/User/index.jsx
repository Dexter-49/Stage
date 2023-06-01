import React from "react";
import { Drawer,List,ListItemButton, ListItemText,ListItemIcon,ListItem} from "@mui/material";

function Admin() {
  const items=(<div>
    <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href="/admin/users">
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  </div>)
  return (
    <Drawer
    open={true}
    variant="permanent"
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    sx={{
      display: { xs: 'block' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
    }}
    >
      {items}
    </Drawer>
  );
}

export default Admin;