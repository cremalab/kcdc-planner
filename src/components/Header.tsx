import { AppBar, Box, Link, Toolbar, Typography } from "@material-ui/core";
import CremaHeart from "./CremaHeart";
import CurrentUser from "./CurrentUser";

export default function Header() {
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <Typography variant="h6" align="center">
          <Link color="secondary" href="https://www.kcdc.info/agenda">
            KCDC
          </Link>
          {"\u00A0"}Planner
        </Typography>
        <div
          style={{
            width: "100%",
            textAlign: "right",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <CurrentUser />
          <Box ml={1}>
            <CremaHeart />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}
