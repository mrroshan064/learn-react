import React, { useState } from "react";

const NextTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [addTask, setAddTask] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setAddTask(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodoList([...todoList, addTask]);
        }}
      >
        Add Task
      </button>
      {todoList.map((task, key) => {
        return (
          <div>
            <h1>{task}</h1>
            <button
              onClick={() =>
                setTodoList(
                  todoList.filter((value, index) => {
                    return index !== key;
                  })
                )
              }
            >
              Delete Task
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NextTodoList;
