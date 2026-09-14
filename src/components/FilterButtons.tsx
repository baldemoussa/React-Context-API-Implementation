import { useContext } from "react";
import { FilterContext, type VisibilityFilter } from "../context/FilterContext";
import { ThemeContext } from "../context/ThemeContext";

const FILTERS: { value: VisibilityFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" }
];

export function FilterButtons() {
  const { filter, setFilter } = useContext(FilterContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="flex gap-3">
      {FILTERS.map(({ value, label }) => {
        const isActive = filter === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-lg px-5 py-2 font-semibold ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : isDark
                  ? "border border-slate-600 bg-slate-800 text-slate-300"
                  : "border border-slate-200 bg-slate-100 text-slate-500"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
