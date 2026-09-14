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
    <div className="flex items-center mb-4">
      <input
        id="todo-input"
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        className={`border px-2 py-1 mr-2 rounded ${
          isDark
            ? "bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
            : "bg-white border-gray-300 text-gray-900"
        }`}
      />
      <button
        type="button"
        onClick={handleAddTodo}
        className={`px-3 py-1 rounded ${
          isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        Add Todo
      </button>
    </div>
  );
}
