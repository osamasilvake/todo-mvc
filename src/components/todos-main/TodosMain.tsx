import { useContext, useState, useMemo } from "react";


import Todo from "../todo/Todo";
import { TodoContext } from "../../context/TodoContext";

const TodosMain = () => {
  const todoservice = useContext(TodoContext);
  if (!todoservice) {
    throw new Error("TodosMain must be used within a TodoProvider");
  }

  const { todos, filter, toggleAllTodos } = todoservice; // Ensure toggleAllTodos exists in the context

  const [editingId, setEditingId] = useState<string | null>(null);

  const visibleTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.isCompleted);
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      case "clearCompleted":
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  }, [todos, filter]);

  const isAllTodosSelected =
    todos.length > 0 && todos.every((todo) => todo.isCompleted);
  const noTodosClass = todos.length === 0;

  return (
    <section className={`main ${noTodosClass ? "hidden" : ""}`}>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isAllTodosSelected}
        onChange={(e) => toggleAllTodos(e.target.checked)}
      />
      <label htmlFor="toggle-all">Mark all as completed</label>
      <ul className="todo-list">
        {visibleTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            isEditing={editingId === todo.id}
            setEditingId={setEditingId}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodosMain;