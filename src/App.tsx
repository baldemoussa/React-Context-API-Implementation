import { useContext } from "react";
import { FilterButtons } from "./components/FilterButtons";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="mx-auto max-w-xl px-6 py-10">
        <header className="mb-6 flex items-start justify-between gap-4">
          <h1
            className={`text-4xl font-extrabold leading-tight tracking-tight ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            Context API - Todo App
          </h1>
          <ThemeToggleButton />
        </header>

        <hr className={isDark ? "border-slate-700" : "border-slate-200"} />

        <div className="mt-6">
          <TodoInput />
        </div>

        <div className="mt-5 flex justify-center">
          <FilterButtons />
        </div>

        <div className="mt-5">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
