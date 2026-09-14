import { useEffect, useState, type ReactNode } from "react";
import { TodoContext, type Todo, type TodoContextType } from "../context/TodoContext";

const TODOS_STORAGE_KEY = "todos";

interface TodoProviderProps {
  children: ReactNode;
}

function loadTodos(): Todo[] {
  try {
    const stored = localStorage.getItem(TODOS_STORAGE_KEY);
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (todo): todo is Todo =>
        todo !== null &&
        typeof todo === "object" &&
        (typeof todo.id === "string" || typeof todo.id === "number") &&
        typeof todo.text === "string" &&
        typeof todo.completed === "boolean"
    );
  } catch {
    return [];
  }
}

function getNextId(todos: Todo[]): number {
  const numericIds = todos
    .map((todo) => (typeof todo.id === "number" ? todo.id : Number(todo.id)))
    .filter((id) => Number.isFinite(id));

  return numericIds.length === 0 ? 1 : Math.max(...numericIds) + 1;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());
  const [nextId, setNextId] = useState<number>(() => getNextId(loadTodos()));

  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo: TodoContextType["addTodo"] = (text) => {
    const newTodo: Todo = {
      id: nextId,
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const toggleTodo: TodoContextType["toggleTodo"] = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo: TodoContextType["deleteTodo"] = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo: TodoContextType["editTodo"] = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const clearCompleted: TodoContextType["clearCompleted"] = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const value: TodoContextType = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
