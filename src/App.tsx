import { useContext } from 'react';
import { FilterButtons } from './components/FilterButtons';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { ThemeContext } from './context/ThemeContext';
import { TodoContext } from './context/TodoContext';

function App() {
  const { theme } = useContext(ThemeContext);
  const { clearCompleted, todos } = useContext(TodoContext);
  const isDark = theme === "dark";
  const hasCompleted = todos.some((todo) => todo.completed);

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Context API Implementation</h1>
          <ThemeToggleButton />
        </div>
        <TodoInput />
        <div className="flex flex-wrap items-center gap-2">
          <FilterButtons />
          <button
            type="button"
            onClick={clearCompleted}
            disabled={!hasCompleted}
            className={`px-3 py-1 rounded ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
            } disabled:opacity-50`}
          >
            Clear completed
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  )
}

export default App
