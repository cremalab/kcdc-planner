import { render } from "react-dom";

import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import { themeOptions } from "./theme";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider theme={createTheme(themeOptions)}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
