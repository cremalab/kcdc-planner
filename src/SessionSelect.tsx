import {
  Button,
  Chip,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import { Talk } from "./types";
import StarIcon from "@material-ui/icons/Star";
import { useState } from "react";

type Props = {
  talks: Talk[];
  initialValue?: string;
  onClose?: (value?: string) => void;
};

export default function SessionSelect({ talks, initialValue, onClose }: Props) {
  const [value, setValue] = useState<string | undefined>(initialValue);

  const handleSubmit = () => {
    if (onClose) {
      onClose(value);
    }
  };

  return (
    <>
      <DialogContent dividers style={{ padding: 0 }}>
        <List>
          {talks.map(
            ({ id, title, presenter, room, summary, category, level }, i) => (
              <ListItem
                alignItems="flex-start"
                selected={id === value}
                autoFocus={id === value}
                button
                onClick={() => setValue(id)}
                key={i}
              >
                <ListItemIcon>
                  <StarIcon color={id === value ? "secondary" : "disabled"} />
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  secondary={
                    <>
                      <Typography
                        component="div"
                        variant="body2"
                        color="textPrimary"
                      >
                        {presenter} ({room})
                        {category && (
                          <Chip
                            size="small"
                            color={id === value ? "primary" : "default"}
                            label={category}
                            style={{ marginLeft: 7 }}
                          />
                        )}
                        {level && (
                          <Chip
                            color="secondary"
                            size="small"
                            label={level}
                            style={{ marginLeft: 7 }}
                          />
                        )}
                      </Typography>
                      {id === value && summary}
                    </>
                  }
                />
              </ListItem>
            )
          )}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose && onClose()} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="secondary" autoFocus>
          Choose
        </Button>
      </DialogActions>
    </>
  );
}
