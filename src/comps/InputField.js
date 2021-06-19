import React, { useState, useEffect } from "react";

function InputField({ newToDoItem }) {
  const [inputText, setInputText] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (inputText.trim() !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [inputText]);

  const handleChange = (event) => {
    const text = event.target.value;
    setInputText(text);
  };

  const addToDo = () => {
    newToDoItem(inputText);
    setInputText("");
  };

  return (
    <div className="inputField">
      <input
        type="text"
        value={inputText}
        placeholder="New Item"
        // autoComplete="off"
        onChange={handleChange}
      />
      <button
        className="add-btn"
        type="submit"
        onClick={addToDo}
        style={
          disable
            ? {}
            : {
                opacity: "1",
                pointerEvents: "auto",
              }
        }
        disabled={disable}
      >
        +
      </button>
    </div>
  );
}

export default InputField;
