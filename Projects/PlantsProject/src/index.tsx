import * as React from "react";
import { render } from "react-dom";

import { PlantsProvider } from "./context/Plants";
import { AppProvider } from "./context/App";
import "./styles/main.css";

import AppPrincipalPage from "./pages/Principal";

const rootElement = document.getElementById("root");

if (rootElement) {
  render(
    <PlantsProvider>
      <AppProvider>
        <AppPrincipalPage />
      </AppProvider>
    </PlantsProvider>,
    rootElement
  );
}
