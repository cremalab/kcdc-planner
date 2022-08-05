import { Button, IconButton, Snackbar } from "@material-ui/core";
import { useState } from "react";
import { useAuth } from "../lib/useAuth";
import { useFirebaseData } from "../lib/useFirebaseData";
import { useLocalData } from "../lib/useLocalData";

export function SnackbarData() {
  const { user } = useAuth();
  const [forceClose, setForceClose] = useState(false);
  const {
    schedule: dbSchedule,
    loading,
    handleSeedData,
  } = useFirebaseData(user?.uid);
  const { localStorageSchedule } = useLocalData();
  const open = Boolean(user && !dbSchedule && localStorageSchedule && !loading);

  function handleClose() {
    setForceClose(true);
  }

  function handleCopy() {
    if (localStorageSchedule) {
      handleSeedData(localStorageSchedule);
    }
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={forceClose ? false : open}
      onClose={handleClose}
      message={
        <>
          <b>You have data saved locally</b>, would you like to use this for
          your new session?
        </>
      }
      action={
        <>
          <Button color="secondary" size="small" onClick={handleCopy}>
            Yes Please!
          </Button>
          <Button color="secondary" size="small" onClick={handleClose}>
            Dismiss
          </Button>
        </>
      }
    />
  );
}
