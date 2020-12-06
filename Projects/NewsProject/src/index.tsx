import * as React from "react";
import { render } from "react-dom";

import { BreakpointProvider } from "./utilities";
import { AppProvider } from "./context/App";
import Routes from "./Routes";
import "./styles/_main.scss";

const queries = {
  sm: "(min-width: 0px)",
  md: "(min-width: 720px)",
  lg: "(min-width: 1024px)"
};

const App = () => (
  <BreakpointProvider queries={queries}>
    <AppProvider>
      <Routes />
    </AppProvider>
  </BreakpointProvider>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
