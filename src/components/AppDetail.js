import React from "react";
import { useParams } from "react-router-dom";

const AppDetailPage = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <p>Task not found!</p>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Priority: {task.priority}</p>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>
      <p>Date: {task.date.toString()}</p>
    </div>
  );


  
};

export default AppDetailPage;







