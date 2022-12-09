import React, { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const task = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const addNewTask = [...todoList, newTask];
    setTodoList(addNewTask);
  };
  const taskDelete = (key) => {
    const deletedTask = todoList.filter((task, index) => {
      return key !== index;
    });
    setTodoList(deletedTask);
  };

  return (
    <div>
      <div className="addTask">
        <input type="text" onChange={task} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {todoList.map((task, index) => {
          return (
            <div>
              <h1 style={{ backgroundColor: taskColor }}>{task}</h1>
              <button onClick={() => taskDelete(index)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
