import { Dialog, Slide } from "@material-ui/core";
import { Talk } from "./types";
import { forwardRef, useState } from "react";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import SessionSelectContainer from "./SessionSelect.container";

type Props = {
  open: boolean;
  selectedValue?: string;
  onClose?: (value?: string) => void;
  talks: Talk[];
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SessionDialog({
  onClose,
  selectedValue,
  open,
  talks,
}: Props) {
  if (talks.length <= 0) {
    return null;
  }

  return (
    <Dialog
      onClose={() => onClose && onClose()}
      aria-labelledby="simple-dialog-title"
      open={open}
      scroll="paper"
      fullScreen
      TransitionComponent={Transition}
    >
      <SessionSelectContainer
        talks={talks}
        onClose={onClose}
        selectedValue={selectedValue}
      />
    </Dialog>
  );
}
