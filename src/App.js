import React, { useState, useEffect } from "react";
import { Heading, InputField, ToDoContainer, Footer } from "./comps";

import "./styles.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    pendingTask();
  }, [toDos]);

  const newToDoItem = (inputText) => {
    const todo = {
      id: toDos.length,
      text: inputText,
      completed: false,
    };
    setToDos([...toDos, todo]);
  };

  const toggleToDoState = (todo) => {
    todo.completed = todo.completed ? false : true;

    setToDos([...toDos]);
  };

  const deleteToDo = (id) => {
    const newToDos = toDos.filter((todo) => todo.id !== id);

    setToDos(newToDos);
  };

  const pendingTask = () => {
    const pendingItems = toDos.filter((todo) => todo.completed === false);

    setPending(pendingItems.length);
  };

  const deleteAll = () => {
    setToDos([]);
  };;

  return (
    <>
      <Heading />
      <div className="box">
        <InputField newToDoItem={newToDoItem} />
        <ToDoContainer
          toDos={toDos}
          toggleToDoState={toggleToDoState}
          deleteToDo={deleteToDo}
        />
        <Footer 
          pending={pending} 
          btnState={toDos.length > 0 ? true : false} 
          deleteAll={deleteAll}
        />
      </div>
    </>
  );
}

export default App;
