import { Box, Drawer, IconButton, List, ListItem } from "@material-ui/core";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

export default function MainMenu() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleClick = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box mr={1}>
      <IconButton
        onClick={handleClick}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={drawerOpen} onClose={handleClose}>
        <List>
          <ListItem>Help</ListItem>
          <ListItem>Reset Sessions</ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
