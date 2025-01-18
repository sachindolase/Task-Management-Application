import React from "react";
import { useParams, Link } from "react-router-dom";
import "./AppDetail.css"; 

const TaskDetailPage = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <p>Task not found!</p>;
  }

  return (
    <div className="task-detail-container">
      <h2>{task.title}</h2>
      <p>
        <span className="priority">Priority: </span>{task.priority}
      </p>
      <p>
        <span className="completed">Completed: </span>
        {task.completed ? "Yes" : "No"}
      </p>
      <p>
        <span className="date">Date: </span>{task.date.toString()}
      </p>
      <Link to="/" className="back-button">
        Back to Task List
      </Link>
    </div>
  );
};

export default TaskDetailPage;
