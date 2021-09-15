import { render } from "react-dom";

import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { themeOptions } from "./theme";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  rootElement
);
