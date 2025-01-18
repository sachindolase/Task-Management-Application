import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TaskApp = ({ task, updateTask, deleteTask }) => {
  const toggleCompletion = () => {
    updateTask({ ...task, completed: !task.completed });
  };



  return (
    <div>
      <h3>{task.title}</h3>
      <p>Priority: {task.priority}</p>
      <p>Date: {task.date.toString()}</p>
      <button onClick={toggleCompletion}>
        {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button><br/><br/>
      <button onClick={() => deleteTask(task.id)}>Delete</button><br/><br/>
      <Link to={`/task/${task.id}`}>View Details</Link>
    </div>
  );
};





TaskApp.propTypes = {
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskApp;




