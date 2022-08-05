import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
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
    <Dialog open={forceClose ? false : open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Logged In!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <b>You have data saved locally</b>, would you like to use this for
          your new session?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Dismiss
        </Button>
        <Button onClick={handleCopy} color="primary" autoFocus>
          Yes Please!
        </Button>
      </DialogActions>
    </Dialog>
  );
}
