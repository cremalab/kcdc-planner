import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Talk } from "../types";
import React from "react";

type Props = {
  talks: Talk[];
  value?: string;
  onSelect?: (value?: string) => void;
};

export default function SessionSelect({ talks, value, onSelect }: Props) {
  return (
    <List>
      {talks.map(
        ({ id, title, presenter, room, summary, category, level }, i) => (
          <React.Fragment key={i}>
            <ListItem
              alignItems="flex-start"
              selected={id === value}
              autoFocus={id === value}
              button
              onClick={() => onSelect && onSelect(id)}
            >
              <ListItemText
                primary={title}
                secondaryTypographyProps={{
                  component: "div",
                }}
                secondary={
                  <>
                    <Typography
                      component="div"
                      variant="caption"
                      color="textPrimary"
                    >
                      {presenter} ({room})
                    </Typography>
                    <Box pt={1}>
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
                    </Box>
                    {id === value && <Box pt={1}>{summary}</Box>}
                  </>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        )
      )}
    </List>
  );
}
