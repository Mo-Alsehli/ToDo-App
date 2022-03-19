import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

function Footer() {
  const {
    active,
    getCompleted,
    getAllTasks,
    getActive,
    clearCompleted,
    allBtn,
    activeBtn,
    completedBtn,
  } = useGlobalContext();

  return (
    <div className="footer">
      <p>{active.length ? active.length : "No"} items left</p>
      <div>
        <button className={allBtn ? "btn active" : "btn"} onClick={getAllTasks}>
          All
        </button>
        <button
          className={activeBtn ? "btn active" : "btn"}
          onClick={getActive}
        >
          Active
        </button>
        <button
          className={completedBtn ? "btn active" : "btn"}
          onClick={getCompleted}
        >
          Completed
        </button>
      </div>
      <button className="btn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default Footer;
