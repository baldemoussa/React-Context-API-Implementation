import { createContext } from "react";

/*
Visibility Filters (FilterContext)
State: The current visibility filter. Possible values: ‘all’, ‘active’, ‘completed’.
Actions (exposed via context):
setFilter(filter: string): Sets the current filter.
Functionality:
The TodoList should display todos based on the currently active filter from FilterContext.
FilterButtons: A component that displays buttons to change the current filter.
*/

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
