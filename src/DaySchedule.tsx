import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import SessionDialog from "./SessionDialog";
import LunchIcon from "@material-ui/icons/Restaurant";
import { getTimeSchedule } from "./common";
import { ScheduleState, SessionData } from "./types";

type Props = {
  weekday: string;
  sourceData: SessionData;
  scheduleData: ScheduleState;
  onSetSchedule: (timeStamp: string, sessionId: string) => void;
};

export default function DaySchedule({
  weekday,
  sourceData,
  scheduleData,
  onSetSchedule,
}: Props) {
  const times = sourceData ? Object.keys(sourceData[weekday]) : [];
  const [openSchedule, setOpenSchedule] = useState<string | undefined>();

  const currentSession = getTimeSchedule(sourceData, {
    day: weekday,
    time: openSchedule,
  });

  return (
    <>
      <List>
        {times.map((time) => {
          const currentSessionId = scheduleData[`${weekday}-${time}`];
          const timeSession = getTimeSchedule(sourceData, {
            day: weekday,
            time,
          });
          const timeTalks = timeSession?.talks || [];
          const sessionObject = timeTalks.find(
            ({ id }) => id === currentSessionId
          );

          return (
            <>
              <ListItem button onClick={() => setOpenSchedule(time)}>
                <ListItemIcon>
                  <Typography variant="subtitle2">{time}</Typography>
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
                  primary={sessionObject?.title || "-- Select Session --"}
                />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
      <SessionDialog
        open={Boolean(openSchedule)}
        talks={currentSession ? currentSession.talks : []}
        selectedValue={
          openSchedule && scheduleData[`${weekday}-${openSchedule}`]
        }
        onClose={(value) => {
          if (openSchedule && value) {
            onSetSchedule(`${weekday}-${openSchedule}`, value);
          }
          setOpenSchedule(undefined);
        }}
      />
    </>
  );
}
