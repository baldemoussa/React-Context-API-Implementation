import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";

export function TodoInput() {
  const { addTodo } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState("");
  const isDark = theme === "dark";

  const handleAddTodo = () => {
    if (text.trim() === "") {
      return;
    }

    addTodo(text.trim());
    setText("");
  };

  return (
    <form
      className="flex items-center gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        handleAddTodo();
      }}
    >
      <input
        id="todo-input"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className={`min-w-0 flex-1 rounded-lg border px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 ${
          isDark
            ? "border-slate-600 bg-slate-800 text-white placeholder:text-slate-400"
            : "border-slate-200 bg-white text-slate-800 placeholder:text-slate-400"
        }`}
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  );
}
