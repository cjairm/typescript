type familyType = "Araceae" | "Piperaceae" | "";
type genusType = "Monstera" | "Philodendron" | "Peperomia" | "";

export interface plantType {
  family: familyType;
  genus: genusType;
  species: string;
  deceased: boolean;
}

export default interface plantsTypes {
  plants: plantType[];
  familyFilter: familyType;
  genusFilter: genusType;
  stateFilter: string;
}
