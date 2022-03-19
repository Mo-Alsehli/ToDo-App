import React from "react";
import Task from "./Task";
import Footer from "./Footer";
import { useGlobalContext } from "../context";

function Tasklist() {
  const { tasks } = useGlobalContext();
  return (
    <div className="tasklist-wrapper">
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <>
          <ul className="no-tasks">No Tasks To Show</ul>
          <div className="underline"></div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Tasklist;
