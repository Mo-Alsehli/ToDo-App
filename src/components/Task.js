import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
function Task({ task }) {
  const { deleteTask, handleCompleted, completed } = useGlobalContext();

  return (
    <>
      <li className="task">
        <div>
          <input
            type="checkbox"
            onClick={() => handleCompleted(task, task.id)}
            className="checkbox"
            checked={completed.includes(task) ? true : false}
          />
          <p className={completed.includes(task) ? "task-checked" : ""}>
            {task.task}
          </p>
        </div>
        <span className="cross" onClick={() => deleteTask(task.id)}>
          <svg
            className="cross-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
          >
            <path
              fill="#494C6B"
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </span>
      </li>
      <div className="underline"></div>
    </>
  );
}

export default Task;
