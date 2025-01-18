import React from "react";
import Task from "./TaskApp";

const List = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default List;
