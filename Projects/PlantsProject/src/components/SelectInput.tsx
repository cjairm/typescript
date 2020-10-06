import React from "react";
import "../styles/main.css";

interface SelectInputComponentInterface {
  id: string;
  values: string[];
  label: string;
  defaultValue?: string;
  onChange?: (...args: any) => void;
}

const SelectInput: React.FC<SelectInputComponentInterface> = ({
  id,
  values,
  label,
  defaultValue,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className="form-control"
        id={id}
        value={defaultValue}
        onChange={onChange}
      >
        <option value="">Choose...</option>
        {values.map((val, i) => {
          return (
            <option key={i} value={val}>
              {val}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
