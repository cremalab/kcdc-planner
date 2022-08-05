import { Box, CircularProgress } from "@material-ui/core";
import DaySchedule from "./components/DaySchedule";
import { useData } from "./lib/useData";
import ScheduleTabs from "./components/ScheduleTabs";
import Header from "./components/Header";
import { useSessionizeData } from "./lib/useSesionizeData";
import { SnackbarData } from "./components/SnackbarData";

export default function App() {
  const { isLoading, setSchedule, scheduleData } = useData();
  const { sourceData, days, loading: loadingSessionData } = useSessionizeData();
  return (
    <>
      <Header />
      <SnackbarData />
      <Box mt={6}>
        {isLoading || loadingSessionData ? (
          <CircularProgress />
        ) : (
          <ScheduleTabs days={days}>
            {(tabIndex) => (
              <>
                {days.map((day, i) =>
                  i === tabIndex && sourceData ? (
                    <DaySchedule
                      key={i}
                      scheduleData={scheduleData}
                      onSetSchedule={setSchedule}
                      sourceData={sourceData}
                      weekday={day}
                    />
                  ) : null
                )}
              </>
            )}
          </ScheduleTabs>
        )}
      </Box>
    </>
  );
}
