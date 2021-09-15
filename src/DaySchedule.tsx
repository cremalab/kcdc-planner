import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography
} from "@material-ui/core";
import { useState } from "react";
import SessionDialog from "./SessionDialog";
import LunchIcon from "@material-ui/icons/Restaurant";
import { getTimeSchedule } from "./common";
import { useStorage } from "./storage";

type Props = {
  weekday: string;
};

export default function DaySchedule({ weekday }: Props) {
  const {
    store: {
      schedule: [schedule, setSchedule]
    },
    sourceData
  } = useStorage();
  const times = Object.keys(sourceData[weekday]);
  const [openSchedule, setOpenSchedule] = useState<string | undefined>();

  const currentSession = getTimeSchedule(sourceData, {
    day: weekday,
    time: openSchedule
  });

  console.log(">>>", currentSession);

  return (
    <>
      <List>
        {times.map((time) => {
          const currentSessionId = schedule[`${weekday}-${time}`];
          const timeSession = getTimeSchedule(sourceData, {
            day: weekday,
            time
          });
          const timeTalks = timeSession?.talks || [];
          const sessionObject = timeTalks.find(
            ({ id }) => id === currentSessionId
          );

          return (
            <>
              {timeSession?.lunch && <Divider />}
              <ListItem
                button
                disabled={timeSession?.breakfast || timeSession?.lunch}
                onClick={() => setOpenSchedule(time)}
              >
                <ListItemIcon>
                  {timeSession?.lunch || timeSession?.breakfast ? (
                    <LunchIcon />
                  ) : (
                    <Typography variant="subtitle2">{time}</Typography>
                    // <Zoom in={Boolean(schedule[time])} timeout={500}>
                    //   <StarIcon color="primary" />
                    // </Zoom>
                  )}
                </ListItemIcon>
                <ListItemText
                  inset
                  secondary={
                    sessionObject
                      ? [sessionObject.presenter, sessionObject.room].join(
                          " / "
                        )
                      : ""
                  }
                  primary={
                    sessionObject?.title ||
                    (timeSession?.lunch
                      ? "Lunch"
                      : timeSession?.breakfast
                      ? "Breakfast"
                      : "-- Select Session --")
                  }
                />
              </ListItem>
              {timeSession?.breakfast && <Divider />}
              {timeSession?.lunch && <Divider />}
            </>
          );
        })}
      </List>
      <SessionDialog
        open={Boolean(openSchedule)}
        talks={currentSession ? currentSession.talks : []}
        selectedValue={openSchedule && schedule[openSchedule]}
        onClose={(value) => {
          if (openSchedule) {
            setSchedule((state) => {
              if (openSchedule && value) {
                state[`${weekday}-${openSchedule}`] = value;
              }
              return state;
            });
          }
          setOpenSchedule(undefined);
        }}
      />
    </>
  );
}
