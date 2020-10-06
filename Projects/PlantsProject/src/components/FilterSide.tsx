import React, { useContext, useCallback, FormEvent } from "react";

import PlantContext from "../context/Plants";
import AppContext from "../context/App";
import SelectInput from "../components/SelectInput";
import Card from "../components/Card";
import plantsType from "../types/plants";
import "../styles/main.css";

const FilterSide: React.FC = () => {
  const [plantState, setPlantState] = useContext(PlantContext);
  const appState = useContext(AppContext)[0];
  const { plants, familyFilter, genusFilter, stateFilter } = plantState;

  const currPlants = plants;
  const families = [] as string[];
  const genus = [] as string[];

  for (let i = 0; currPlants.length > i; i++) {
    const currPlant = currPlants[i];
    if (families.indexOf(currPlant.family) === -1) {
      families.push(currPlant.family);
    }

    if (genus.indexOf(currPlant.genus) === -1) {
      genus.push(currPlant.genus);
    }
  }

  const onChangeSelectHandler = useCallback(
    (value: string, target: "family" | "genus" | "status") => {
      if (target === "family") {
        setPlantState((prevState: plantsType) => {
          return {
            ...prevState,
            familyFilter: value,
            genusFilter: "",
            stateFilter: ""
          };
        });
      } else if (target === "genus") {
        setPlantState((prevState: plantsType) => {
          return {
            ...prevState,
            familyFilter: "",
            genusFilter: value,
            stateFilter: ""
          };
        });
      } else if (target === "status") {
        setPlantState((prevState: plantsType) => {
          return {
            ...prevState,
            familyFilter: "",
            genusFilter: "",
            stateFilter: value
          };
        });
      }
    },
    [setPlantState]
  );

  return (
    <div
      className={`${
        appState.filterBox
          ? "col-12 col-sm-4 col-lg-3 col-slide-show"
          : "col-slide-hide"
      }`}
    >
      <div className="row">
        <div className="col-12">
          <Card>
            <SelectInput
              id="families-values"
              label="Select a family"
              values={families}
              defaultValue={familyFilter}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                onChangeSelectHandler(e.currentTarget.value, "family")
              }
            />
          </Card>
        </div>

        <div className="col-12">
          <Card>
            <SelectInput
              id="genus-values"
              label="Select a genus"
              values={genus}
              defaultValue={genusFilter}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                onChangeSelectHandler(e.currentTarget.value, "genus")
              }
            />
          </Card>
        </div>

        <div className="col-12">
          <Card>
            <SelectInput
              id="state-values"
              label="State of your plant"
              values={["alive", "dead"]}
              defaultValue={stateFilter}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                onChangeSelectHandler(e.currentTarget.value, "status")
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
