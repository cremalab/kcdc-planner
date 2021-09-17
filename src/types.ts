export interface Talk {
  id: string;
  title: string;
  presenter: string;
  summary: string;
  room: string;
  category?: string;
  level?: string;
  startDate: Date;
  endDate: Date;
}

export interface Session {
  talks: Talk[];
  lunch?: boolean;
  breakfast?: boolean;
}

export interface SessionData {
  [day: string]: {
    [time: string]: Session;
  };
}

export interface ScheduleState {
  [timestamp: string]: string;
}
export interface SessionizeResponse {
  groupId: string | null;
  groupName: string;
  sessions: {
    id: string;
    title: string;
    description: string;
    startsAt: string;
    endsAt: string;
    speakers: {
      id: string;
      name: string;
    }[];
    roomId: number;
    room: string;
    categories: {
      id: number;
      name: string;
      categoryItems: {
        id: number;
        name: string;
      }[];
      sort: number;
    }[];
  }[];
}
