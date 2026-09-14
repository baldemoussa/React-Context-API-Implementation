import { createContext } from "react";

export interface Todo {
  id: string | number;
  text: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string | number) => void;
  deleteTodo: (id: string | number) => void;
  editTodo: (id: string | number, newText: string) => void;
  clearCompleted: () => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {console.warn("addTodo function not implemented")},
  toggleTodo: () => {console.warn("toggleTodo function not implemented")},
  deleteTodo: () => {console.warn("deleteTodo function not implemented")},
  editTodo: () => {console.warn("editTodo function not implemented")},
  clearCompleted: () => {console.warn("clearCompleted function not implemented")}
});
