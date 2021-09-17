import {
  Typography,
  ButtonBase,
  makeStyles,
  LinearProgress,
  Divider,
} from "@material-ui/core";
import React, { useState } from "react";
import SessionDialog from "./SessionDialog";
import { getDatePercentageValue, getTimeSchedule } from "./common";
import { ScheduleState, SessionData } from "./types";
import { useEffect } from "react";
import { addMinutes, subMinutes } from "date-fns";

type Props = {
  weekday: string;
  sourceData: SessionData;
  scheduleData: ScheduleState;
  onSetSchedule: (timeStamp: string, sessionId: string) => void;
};

const useStyles = makeStyles((theme) => ({
  item: {
    display: "block",
    width: "100%",
    padding: theme.spacing(1),
    textAlign: "left",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
}));

export default function DaySchedule({
  weekday,
  sourceData,
  scheduleData,
  onSetSchedule,
}: Props) {
  const classes = useStyles();
  const times = sourceData ? Object.keys(sourceData[weekday]) : [];
  const [openSchedule, setOpenSchedule] = useState<string | undefined>();
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const currentSession = getTimeSchedule(sourceData, {
    day: weekday,
    time: openSchedule,
  });

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  return (
    <>
      <div>
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
            <React.Fragment key={time}>
              <ButtonBase
                className={classes.item}
                onClick={() => setOpenSchedule(time)}
              >
                <Typography variant="overline" component="div">
                  {time}
                </Typography>

                {sessionObject && (
                  <Typography
                    color="textSecondary"
                    variant="caption"
                    component="div"
                  >
                    {[sessionObject.presenter, sessionObject.room].join(" • ")}
                  </Typography>
                )}
                {sessionObject?.title ? (
                  <Typography variant="h6" component="div">
                    {sessionObject.title}
                  </Typography>
                ) : (
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    component="div"
                  >
                    -- Select Session --
                  </Typography>
                )}
              </ButtonBase>
              {sessionObject ? (
                <LinearProgress
                  color="secondary"
                  variant="determinate"
                  value={getDatePercentageValue({
                    currentDate: currentTime,
                    startDate: sessionObject.startDate,
                    endDate: sessionObject.endDate,
                  })}
                />
              ) : (
                <Divider />
              )}
            </React.Fragment>
          );
        })}
      </div>
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
