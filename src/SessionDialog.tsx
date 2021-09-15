import { Dialog, DialogTitle } from "@material-ui/core";
import { Talk } from "./types";
import SessionSelect from "./SessionSelect";

type Props = {
  open: boolean;
  selectedValue?: string;
  onClose?: (value?: string) => void;
  talks: Talk[];
};

export default function SessionDialog({
  onClose,
  selectedValue,
  open,
  talks
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
    >
      <DialogTitle id="simple-dialog-title">Choose Session</DialogTitle>
      <SessionSelect
        onClose={(value) => {
          if (onClose) {
            onClose(value);
          }
        }}
        talks={talks}
        initialValue={selectedValue}
      />
    </Dialog>
  );
}
