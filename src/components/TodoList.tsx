import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
