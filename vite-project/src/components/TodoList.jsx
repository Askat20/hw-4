import { useState } from "react";
import "./TodoList.css";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const updateTodo = (index, newText) => {
    if (newText.trim() === "") return;
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>TODO-LIST</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo} className="add-btn">
          ADD
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <input
              type="text"
              value={todo.text}
              onChange={(e) => updateTodo(index, e.target.value)}
              className="todo-text"
            />
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <button onClick={() => deleteTodo(index)} className="delete-btn">
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
