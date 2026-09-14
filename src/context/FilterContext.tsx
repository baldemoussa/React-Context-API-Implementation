import { createContext } from "react";

export type VisibilityFilter = "all" | "active" | "completed";

export interface FilterContextType {
  filter: VisibilityFilter;
  setFilter: (filter: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  filter: "all",
  setFilter: () => {
    console.warn("setFilter function not implemented");
  }
});
