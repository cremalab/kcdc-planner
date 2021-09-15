import { format } from "date-fns";
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
    const date = new Date(session.startsAt);
    const day = format(date, "E, P");
    const time = format(date, "h:mmaaa");

    const categoryMap = keyBy(session.categories, "name");
    // const sessionMap = categoryMap['Session format'].categoryItems;
    const trackMap = categoryMap["Track"].categoryItems;
    const levelMap = categoryMap["Level"].categoryItems;

    const newData: Talk = {
      id: session.id,
      title: session.title,
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
