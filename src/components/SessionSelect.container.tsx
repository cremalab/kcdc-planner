import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Talk } from "../types";
import SessionSelect from "./SessionSelect";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

type Props = {
  selectedValue?: string;
  onClose?: (value?: string) => void;
  talks: Talk[];
};

export default function SessionSelectContainer({
  onClose,
  selectedValue,
  talks,
}: Props) {
  const [value, setValue] = useState<string | undefined>(selectedValue);

  function handleClose() {
    onClose && onClose();
  }

  function handleSave() {
    onClose && value && onClose(value);
  }

  return (
    <>
      <AppBar color="default">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Choose Session</Typography>
          <div style={{ flex: 1, textAlign: "right" }}>
            <Button
              disabled={!Boolean(value) || value === selectedValue}
              autoFocus
              color="secondary"
              variant="contained"
              onClick={handleSave}
            >
              save
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <SessionSelect
        onSelect={(value) => setValue(value)}
        talks={talks}
        value={value}
      />
    </>
  );
}
