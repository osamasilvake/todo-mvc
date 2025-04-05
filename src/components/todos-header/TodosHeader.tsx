import { useState, useRef, useEffect, useContext, SetStateAction } from "react";
import { TodoContext } from "../../context/TodoContext";


const TodosHeader = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext is not provided.");
  }

  const { addTodo } = todoContext;
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const changeText = (e: { target: { value: SetStateAction<string> } }) =>
    setText(e.target.value);

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter" && text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        ref={inputRef}
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={changeText}
        onKeyUp={handleKeyPress}
      />
    </header>
  );
};

export default TodosHeader;