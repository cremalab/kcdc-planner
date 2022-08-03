import { AppBar, Tab, Tabs } from "@material-ui/core";
import { format } from "date-fns";
import { ReactNode, useState } from "react";

type Props = {
  days: string[];
  children: (tabIndex: number) => ReactNode;
};

export default function ScheduleTabs({ days, children }: Props) {
  const today = format(new Date(), "E, P");
  const initialTabIndex = days.indexOf(today);
  const [tabIndex, setTabIndex] = useState(
    initialTabIndex > -1 ? initialTabIndex : 0
  );

  const handleChange = (event: React.ChangeEvent<{}>, index: number) => {
    setTabIndex(index);
  };

  return (
    <>
      <AppBar
        position="static"
        color="default"
        style={{
          top: 40,
        }}
      >
        <Tabs value={tabIndex} onChange={handleChange} variant="fullWidth">
          {days.map((day, i) => (
            <Tab key={i} label={day} />
          ))}
        </Tabs>
      </AppBar>

      {children(tabIndex)}
    </>
  );
}
