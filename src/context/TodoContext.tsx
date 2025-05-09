import { createContext, useState, useEffect, ReactNode } from "react";

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
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
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");

  // Cleanup todos on unmount
  useEffect(() => {
    return () => {
      setTodos([]);
    };
  }, []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
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
