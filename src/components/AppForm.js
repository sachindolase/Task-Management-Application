import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css"; 

const AppForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      date: new Date(),
    };
    addTask(newTask);
    setTitle("");
    setPriority("Medium");



  };




  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};




AppForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};



export default AppForm;
