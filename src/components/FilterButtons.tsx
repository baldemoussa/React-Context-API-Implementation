import { useContext } from "react";
import { FilterContext, type VisibilityFilter } from "../context/FilterContext";
import { ThemeContext } from "../context/ThemeContext";

const FILTERS: VisibilityFilter[] = ["all", "active", "completed"];

export function FilterButtons() {
  const { filter, setFilter } = useContext(FilterContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="flex gap-2 p-2 mb-4">
      {FILTERS.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => setFilter(value)}
          className={`px-3 py-1 rounded capitalize ${
            filter === value
              ? "bg-blue-600 text-white"
              : isDark
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-900"
          }`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
