import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos, clearCompleted } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  if (todos.length === 0) {
    return (
      <p className={`py-6 text-center italic ${isDark ? "text-slate-400" : "text-slate-400"}`}>
        No todos yet! Add one above.
      </p>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-sm ${
        isDark ? "border-slate-700 bg-slate-800" : "border-slate-100 bg-white"
      }`}
    >
      <ul className={isDark ? "divide-y divide-slate-700" : "divide-y divide-slate-100"}>
        {visibleTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <div
        className={`flex items-center justify-between px-4 py-3 text-sm ${
          isDark ? "border-t border-slate-700" : "border-t border-slate-100"
        }`}
      >
        <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
          {activeCount} {activeCount === 1 ? "item" : "items"} left
        </span>
        <button
          type="button"
          onClick={clearCompleted}
          disabled={completedCount === 0}
          className="font-medium text-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear Completed ({completedCount})
        </button>
      </div>
    </div>
  );
}
