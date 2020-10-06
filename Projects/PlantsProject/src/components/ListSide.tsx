import React, { useContext } from "react";

import PlantContext from "../context/Plants";
import AppContext from "../context/App";
import plantsType, { plantType } from "../types/plants";
import "../styles/main.css";

const ListSide: React.FC = () => {
  const [plantState, setPlantState] = useContext(PlantContext);
  const { plants, familyFilter, genusFilter, stateFilter } = plantState;
  const appState = useContext(AppContext)[0];

  const updateStateHandler = (idx: number) => {
    setPlantState((prevState: plantsType) => {
      const currState = {
        ...prevState
      };
      const state = currState.plants[idx].deceased;
      currState.plants[idx].deceased = !state;
      return currState;
    });
  };

  return (
    <div
      className={`${
        appState.filterBox ? "col-12 col-sm-8 col-lg-9" : "col-12"
      }`}
    >
      <ul className="list-group">
        {plants.map((plant: plantType, i: number) => {
          if (
            plant.family === familyFilter ||
            plant.genus === genusFilter ||
            (plant.deceased && stateFilter === "dead") ||
            (!plant.deceased && stateFilter === "alive") ||
            (familyFilter === "" && genusFilter === "" && stateFilter === "")
          ) {
            return (
              <ListItem
                key={i}
                label={`${plant.genus} ${plant.species}`}
                badge={plant.deceased ? "dead" : "alive"}
                alive={!plant.deceased}
                onChange={() => updateStateHandler(i)}
              />
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

interface ListItemComponentInterface {
  label: string;
  badge: string | number;
  alive?: boolean;
  onChange?: (...args: any) => any;
}

const ListItem: React.FC<ListItemComponentInterface> = ({
  label,
  badge,
  alive,
  onChange
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {label}
      {alive && (
        <button
          type="button"
          className="btn btn--color-secondary btn-sm"
          onClick={onChange}
        >
          Mark as dead
        </button>
      )}
      <span
        className={`badge ${
          alive ? "badge-success" : "badge-warning"
        } badge-pill`}
      >
        {badge}
      </span>
    </li>
  );
};

export default ListSide;
