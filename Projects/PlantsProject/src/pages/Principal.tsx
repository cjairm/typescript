import React, { useCallback, useContext, useEffect } from "react";
import "../styles/main.css";

import ButtonFilter from "../components/ButtonFilter";
import ListSide from "../components/ListSide";
import FilterSide from "../components/FilterSide";

import PlantContext from "../context/Plants";
import { data as plantData } from "../data";
import plantsType from "../types/plants";

/*
## Task
1. I should be able to see a list of plants displaying `{genus} {species}`.
2. I should be able to see an indicator next to the plant displaying if its deceased or alive.
3. I should be able to see and click on a button to switch the plant from alive to dead.
4. I should be able to filter data by family using a select.
5. I should be able to filter data by genus using a select.
6. I should be able to see the filters on the left hand side, and the list on the right hand side.
7. I should be able to see a card/box around the filters.
8. I should be able to see a styled select.
9. I should be able to see a styled list.
*/

const Principal: React.FC = () => {
  const setPlantState = useContext(PlantContext)[1];

  const getPlants = useCallback(async () => {
    const plants: plantsType = await plantData;
    return plants.plants;
  }, []);

  useEffect(() => {
    getPlants().then((res) => {
      setPlantState((prevState: plantsType) => {
        return {
          ...prevState,
          plants: res,
          showPlants: res
        };
      });
    });
  }, [getPlants, setPlantState]);

  return (
    <div className="container-fluid">
      <ButtonFilter />

      <div className="row">
        <FilterSide />

        <ListSide />
      </div>
    </div>
  );
};

export default Principal;
