import { createContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom"; // Assuming you're using React Router

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  toggleAllTodos: (isCompleted: boolean) => void;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, newText: string) => void;
  removeTodo: (id: string) => void;
  clearCompleted: () => void;
  changeFilter: (filter: string) => void;
  filter: string;
  toggleAllTodos: (isChecked: boolean) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const location = useLocation();
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from sessionStorage (temporary session persistence)
    const storedTodos = sessionStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [filter, setFilter] = useState<string>("all");

  // Clear todos when navigating away from the details page (i.e., on unmount)
  useEffect(() => {
    // Check if we are navigating to the details page or not
    if (!location.pathname.includes("details")) {
      setTodos([]); // Clear todos if we are not on the details page
      sessionStorage.removeItem("todos"); // Optionally remove from session storage
    }
  }, [location.pathname]); // Dependency on the location changes

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      isCompleted: false,
    };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      sessionStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save to sessionStorage
      return updatedTodos;
    });
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const updateTodo = (id: string, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  };

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  const toggleAllTodos = (isChecked: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isCompleted: isChecked,
      }))
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        updateTodo,
        removeTodo,
        clearCompleted,
        changeFilter,
        filter,
        toggleAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
