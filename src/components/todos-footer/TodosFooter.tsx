import { useContext, useMemo } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodosFooter = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext is not provided.");
  }
  const { todos, clearCompleted, changeFilter, filter } = todoContext;

  const activeCount = useMemo(() => {
    return todos.filter((todo: { isCompleted: any }) => !todo.isCompleted)
      .length;
  }, [todos]);

  const noTodosClass = todos.length === 0;
  const itemsLeftText = `item${activeCount !== 1 ? "s" : ""} left`;

  return (
    <footer className={`footer ${noTodosClass ? "hidden" : ""}`}>
      <span className="todo-count">
        <strong>{activeCount}</strong> {itemsLeftText}
      </span>
      <ul className="filters">
        {["all", "active", "completed"].map((type) => (
          <li key={type}>
            <a
              href="#/"
              className={filter === type ? "selected" : ""}
              onClick={(e) => {
                e.preventDefault();
                changeFilter(type);
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              clearCompleted();
            }}
          >
            Clear Completed
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default TodosFooter;