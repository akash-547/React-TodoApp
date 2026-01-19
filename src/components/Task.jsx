import React from "react";
import { useState } from "react";
import "../App.css";
import "../index.css";
function Task() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const addTask = () => {
    if (input.trim() === "") {
      setError("Please enter a task");
      return;
    }
    setError("");
    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    // ---functional UI code --
    <div className="bg-white place-self-center w-11/12 max-w-md p-7 min-h-[550px] rounded-xl  shadow-lg flex flex-col ">
      {/* --- title ---- */}
      <div className=" flex items-center mt-7 gap-2">
        <h1 className="text-3xl font-semibold">Task Manager</h1>
      </div>
      {/* --- input box --- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-gray-500"
        />
        <button
          onClick={addTask}
          className="border-none rounded-full bg-blue-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {/* --- task-list --- */}
      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between bg-gray-100 p-4 mb-2 rounded-lg cursor-pointer"
            onClick={() => toggleTask(task.id)}
          >
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              className="flex-1"
            >
              {task.text}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTask(task.id);
              }}
              className="text-red-500 text-xl ml-2"
            >
              ❌  
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
