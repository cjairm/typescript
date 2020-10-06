import React, { ReactNode } from "react";
import "../styles/main.css";

interface CardComponentInterface {
  children: ReactNode;
}

const FilterSide: React.FC<CardComponentInterface> = ({ children }) => {
  return <div className="shadow p-3 mb-5 bg-white rounded">{children}</div>;
};

export default FilterSide;
