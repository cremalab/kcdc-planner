import { render } from "react-dom";

import App from "./App";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { themeOptions } from "./theme";
import { StorageProvider } from "./storage";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
render(
  <StorageProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createMuiTheme(themeOptions)}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StorageProvider>,
  rootElement
);
