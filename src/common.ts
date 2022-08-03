import { differenceInSeconds, format, isAfter, isBefore } from "date-fns";
import { SessionData, Session, SessionizeResponse, Talk } from "./types";
import { keyBy } from "lodash";

export function getTimeSchedule(
  sourceData: SessionData,
  {
    day,
    time
  }: {
    day?: string;
    time?: string;
  }
): Session | undefined {
  return day && time ? sourceData[day][time] : undefined;
}

export function normalizeSessions(payload: SessionizeResponse[]): SessionData {
  const sessions = payload?.[0].sessions;
  let sessionData: SessionData = {};

  sessions.forEach((session) => {
    const startDate = new Date(session.startsAt);
    const endDate = new Date(session.endsAt);
    const day = format(startDate, "E, P");
    const time = format(startDate, "h:mmaaa");

    const categoryMap = keyBy(session.categories, "name");
    const trackMap = categoryMap["Track"] ? categoryMap["Track"].categoryItems : [];
    const levelMap = categoryMap["Level"] ? categoryMap["Level"].categoryItems : [];

    const newData: Talk = {
      id: session.id,
      title: session.title,
      startDate,
      endDate,
      presenter: session.speakers.map((s) => s.name).join(", "),
      summary: session.description,
      room: session.room,
      category: trackMap.map(({ name }) => name).join(", "),
      level: levelMap.map(({ name }) => name).join(", ")
      // level?: string;
    };
    if (sessionData[day]) {
      if (sessionData[day][time]) {
        sessionData[day][time].talks.push(newData);
      } else {
        sessionData[day][time] = {
          talks: [newData]
        };
      }
    } else {
      sessionData[day] = {};
    }
  });

  return sessionData;
}


export function getDatePercentageValue({
  currentDate,
  startDate,
  endDate,
}: {
  currentDate: Date;
  startDate: Date;
  endDate: Date;
}) {
  if (isAfter(currentDate, endDate)) {
    return 100;
  }
  if (isBefore(currentDate, startDate)) {
    return 0;
  }

  const totalSeconds = differenceInSeconds(startDate, endDate);
  const totalAccumulated = differenceInSeconds(startDate, currentDate);

  return (totalAccumulated / totalSeconds) * 100;
}
