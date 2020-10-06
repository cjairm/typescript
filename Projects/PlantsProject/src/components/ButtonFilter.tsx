import React, { useContext } from "react";
import "../styles/main.css";

import Button from "./Button";
import AppContext from "../context/App";
import AppType from "../types/app";

const ButtonFilter: React.FC = () => {
  const [appState, setAppState] = useContext(AppContext);

  const onClickHandler = () => {
    setAppState((prevState: AppType) => {
      return {
        ...prevState,
        filterBox: !prevState.filterBox
      };
    });
  };

  return (
    <div className="row my-4">
      <div className="col">
        <Button color="primary" onClick={onClickHandler}>
          {appState.filterBox ? "Hide filters" : "Show filters"}
        </Button>
      </div>
    </div>
  );
};

export default ButtonFilter;
