import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext, type Todo } from "../context/TodoContext";

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const isDark = theme === "dark";

  const saveEdit = () => {
    const trimmed = editText.trim();
    if (trimmed === "") {
      return;
    }

    editTodo(todo.id, trimmed);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li
      className="flex items-center gap-3 px-4 py-3.5"
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={todo.completed}
        aria-label={todo.completed ? "Mark as active" : "Mark as completed"}
        onClick={() => toggleTodo(todo.id)}
        className="shrink-0"
      >
        {todo.completed ? (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        ) : (
          <span className={`block h-6 w-6 rounded-full border-2 ${isDark ? "border-slate-500" : "border-slate-300"}`} />
        )}
      </button>

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            autoFocus
            onChange={(event) => setEditText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                saveEdit();
              }
              if (event.key === "Escape") {
                cancelEdit();
              }
            }}
            className={`min-w-0 flex-1 rounded-md border px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark
                ? "border-slate-600 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-800"
            }`}
          />
          <button
            type="button"
            onClick={saveEdit}
            className="text-sm font-semibold text-blue-500 hover:text-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={cancelEdit}
            className={`text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            className={`min-w-0 flex-1 ${
              todo.completed
                ? "text-slate-400 line-through"
                : isDark
                  ? "text-slate-100"
                  : "text-slate-700"
            }`}
          >
            {todo.text}
          </span>
          <button
            type="button"
            aria-label="Edit todo"
            onClick={() => {
              setEditText(todo.text);
              setIsEditing(true);
            }}
            className={`shrink-0 ${isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Delete todo"
            onClick={() => deleteTodo(todo.id)}
            className={`shrink-0 ${isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
            </svg>
          </button>
        </>
      )}
    </li>
  );
}
