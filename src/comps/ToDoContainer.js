import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function ToDoContainer({ toDos, toggleToDoState, deleteToDo }) {
  return (
    <ul className="todoList">
      {toDos.map((todo) => {
        const classCheckBox = todo.completed
          ? "checkbox completed"
          : "checkbox";
        return (
          <li key={todo.id} className="item">
            <label className="todo-list__label">
              <input
                type="checkbox"
                className={classCheckBox}
                onClick={() => toggleToDoState(todo)}
              />
              <i className="check"></i>
              <span className="todo-text">{todo.text}</span>
              <span className="trash" onClick={() => deleteToDo(todo.id)}>
                <DeleteIcon fontSize="large" />
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoContainer;
