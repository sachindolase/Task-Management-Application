import React, { useState } from "react";
import TaskList from "../components/AppList";
import TaskForm from "../components/AppForm";
import TaskFilter from "../components/AppFilter";
import TaskSort from "../components/AppSort";
import "./Home.css"; 

const HomePage = ({ tasks, addTask, updateTask, deleteTask }) => {
  const [filter, setFilter] = useState("All");
  const [sortOption, setSortOption] = useState("date");

  const filteredTasks = tasks.filter(task => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOption === "priority") {
      return a.priority.localeCompare(b.priority);
    }
    return a.date - b.date;
  });

  return (
    <div className="homepage-container">
      <h1 className="title">Task Management Application</h1> 
      <TaskForm addTask={addTask} />
      <div className="filters-container">
        <TaskFilter setFilter={setFilter} />
        <TaskSort setSortOption={setSortOption} />
      </div>
      <TaskList tasks={sortedTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default HomePage;
