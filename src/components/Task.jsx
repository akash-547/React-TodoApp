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
      setError("Please enter a task !");
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
    <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 place-self-center w-11/12 max-w-md p-7 min-h-[550px] rounded-xl shadow-lg flex flex-col">
      {/* --- title ---- */}
      <div className=" flex items-center mt-7 gap-2">
        <h1 className="text-3xl font-semibold text-white">Task Manager</h1>
      </div>
      {/* --- input box --- */}
      <div className="flex items-center my-5   bg-white rounded-full shadow-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-gray-500"
        />
        <button
          onClick={addTask}
          className="border-none rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          Add +
        </button>
      </div>
      {error && <p className="text-red-500 mb-4   ">{error}</p>}
      {/* --- task-list --- */}
      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between p-4 mb-2 rounded-lg shadow-md transition-all ${
              task.completed ? 'bg-green-100' : 'bg-white'
            }`}
          >
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              className="flex-1 text-gray-800"
            >
              {task.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleTask(task.id)}
                className="text-green-600 text-xl hover:text-green-800 transition-colors"
              >
                ✓
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="text-red-600 text-xl hover:text-red-800 transition-colors"
              >
                ✗
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
