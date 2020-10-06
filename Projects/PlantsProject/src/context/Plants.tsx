import React, { createContext, useState, ReactNode } from "react";

import PlantsType from "../types/plants";

const PlantsContext = createContext(null as any);

interface PlantsProviderInterface {
  children: ReactNode;
}

export const PlantsProvider: React.FC<PlantsProviderInterface> = ({
  children
}) => {
  // useReducer is better practice
  const [state, setState] = useState<PlantsType>({
    plants: [],
    familyFilter: "",
    genusFilter: "",
    stateFilter: ""
  });

  return (
    <PlantsContext.Provider value={[state, setState]}>
      {children}
    </PlantsContext.Provider>
  );
};

export default PlantsContext;
