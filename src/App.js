import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskDetailPage from "./pages/TaskDetailPage";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Sachin", completed: false, priority: "High", date: new Date() },
    { id: 2, title: "Nitin", completed: true, priority: "Low", date: new Date() }
  ]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage tasks={tasks} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} />}
        />
        <Route
          path="/task/:id"
          element={<TaskDetailPage tasks={tasks} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
