import React, { createContext, useState, ReactNode } from "react";

import AppType from "../types/app";

const AppContext = createContext(null as any);

interface AppProviderInterface {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderInterface> = ({ children }) => {
  // useReducer is better practice
  const [state, setState] = useState<AppType>({
    filterBox: false
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
