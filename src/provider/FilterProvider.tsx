import { useState, type ReactNode } from "react";
import { FilterContext, type FilterContextType, type VisibilityFilter } from "../context/FilterContext";

interface FilterProviderProps {
  children: ReactNode;
}

function isVisibilityFilter(value: string): value is VisibilityFilter {
  return value === "all" || value === "active" || value === "completed";
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilterState] = useState<VisibilityFilter>("all");

  const setFilter: FilterContextType["setFilter"] = (nextFilter) => {
    if (isVisibilityFilter(nextFilter)) {
      setFilterState(nextFilter);
    }
  };

  const value: FilterContextType = {
    filter,
    setFilter
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}
