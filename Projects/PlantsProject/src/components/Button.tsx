import React, { ReactNode } from "react";

/* 
  style-component does not work :'(
*/

interface ButtonComponentInterface {
  children: ReactNode;
  color?: "primary" | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonComponentInterface> = ({
  color,
  children,
  onClick
}) => {
  let currColor;
  switch (color) {
    case "primary":
      currColor = "btn--color-primary";
      break;
    default:
      currColor = "";
      break;
  }
  return (
    <button type="button" onClick={onClick} className={`btn ${currColor}`}>
      {children}
    </button>
  );
};

export default Button;
