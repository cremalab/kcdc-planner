import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Popper,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useAuth } from "../lib/useAuth";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    padding: theme.spacing(2),
  },
  arrow: {
    color: theme.palette.common.white,
  },
}))(Tooltip);

export default function CurrentUser() {
  const { loading, error, handleClick, user } = useAuth();
  const [dismissLoginMessage, setDismissLoginMessage] = useLocalStorageState<
    string | undefined
  >("dismissLoginMessage");

  function handleClose() {
    setDismissLoginMessage("false");
  }

  if (loading) {
    return <CircularProgress size="small" />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <LightTooltip
        open={Boolean(!user && !dismissLoginMessage)}
        interactive={true}
        title={
          <>
            <Box pb={1}>
              <b>
                You can now save your data to Firebase with a GitHub account!
              </b>
            </Box>
            <Box pb={1}>
              Otherrwise, we'll keep saving your data on your device.
            </Box>
            <Box textAlign="right">
              <Button variant="contained" onClick={handleClose}>
                Dismiss
              </Button>
            </Box>
          </>
        }
        arrow
      >
        <Button
          onClick={handleClick}
          variant="text"
          color="default"
          size="small"
          startIcon={<GitHubIcon />}
        >
          {user ? "Logout" : "Login"}
        </Button>
      </LightTooltip>
    </>
  );
}
