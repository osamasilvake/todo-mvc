import { useEffect, useRef, useState, useContext } from "react";
import { Todo as TodoInterface, TodoContext } from "../../context/TodoContext";

interface TodoProps {
  todo: TodoInterface;
  isEditing: boolean;
  setEditingId: (id: string | null) => void;
}

const Todo = ({ todo, isEditing, setEditingId }: TodoProps) => {
  const [editingText, setEditingText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext is not provided.");
  }
  const { toggleTodo, removeTodo, updateTodo } = todoContext;

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setEditingId(todo.id);
  };

  const handleUpdate = () => {
    if (editingText.trim()) {
      updateTodo(todo.id, editingText);
    }
    setEditingId(null);
  };

  return (
    <li
      className={`${todo.isCompleted ? "completed" : ""} ${
        isEditing ? "editing" : ""
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <label onDoubleClick={handleEdit}>{todo.text}</label>
        <button
          className="destroy"
          onClick={() => removeTodo(todo.id)}
        ></button>
      </div>
      {isEditing && (
        <input
          className="edit"
          ref={inputRef}
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleUpdate()}
          onBlur={handleUpdate}
        />
      )}
    </li>
  );
};

export default Todo;