import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.text}>
          {" "}
          {/* Render each task within a list item */}
          <Task
            text={task.text}
            category={task.category}
            onDelete={onDelete}
            task={task}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
