import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AppContext = React.createContext();
const getLocalTasks = () => {
  let tasks = localStorage.getItem("tasks");

  if (tasks) {
    return (tasks = JSON.parse(localStorage.getItem("tasks")));
  } else {
    return [];
  }
};
const getLocalAllTasks = () => {
  let allTasks = localStorage.getItem("allTasks");

  if (allTasks) {
    return (allTasks = JSON.parse(localStorage.getItem("allTasks")));
  } else {
    return [];
  }
};
const getLocalActive = () => {
  let active = localStorage.getItem("active");

  if (active) {
    return (active = JSON.parse(localStorage.getItem("active")));
  } else {
    return [];
  }
};
const getLocalCompleted = () => {
  let completed = localStorage.getItem("completed");

  if (completed) {
    return (completed = JSON.parse(localStorage.getItem("completed")));
  } else {
    return [];
  }
};
const getLocalTheme = () => {
  let theme = "dark-theme";

  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(getLocalTasks());
  const [allTasks, setAllTasks] = useState(getLocalAllTasks());
  const [active, setActive] = useState(getLocalActive());
  const [task, setTask] = useState();
  const [id, setId] = useState(1);
  const [completed, setCompleted] = useState(getLocalCompleted);
  const [allBtn, setAllBtn] = useState(true);
  const [activeBtn, setActiveBtn] = useState(false);
  const [completedBtn, setCompletedBtn] = useState(false);
  const [theme, setTheme] = useState(getLocalTheme());

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  const addTask = () => {
    setTasks([...tasks, { task, id: uuidv4() }]);
    setAllTasks([...tasks, { task, id: uuidv4() }]);
    setActive([...tasks, { task, id: uuidv4() }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      addTask(task);
      setTask("");
    }
  };
  const handleValue = (e) => {
    setTask(e.target.value);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setAllTasks(allTasks.filter((task) => task.id !== id));
    setActive(active.filter((task) => task.id !== id));
    setCompleted(completed.filter((task) => task.id !== id));
  };

  const handleCompleted = (task, id, e) => {
    if (!completed.includes(task)) {
      setCompleted([...completed, task]);
      setActive(active.filter((task) => task.id !== id));
    } else {
      setCompleted(completed.filter((task) => task.id !== id));
      setActive([...active, task]);
    }
  };

  const getCompleted = (e) => {
    setAllBtn(false);
    setActiveBtn(false);
    setCompletedBtn(true);
    setTasks([...completed]);
  };

  const getAllTasks = (e) => {
    setAllBtn(true);
    setActiveBtn(false);
    setCompletedBtn(false);
    setTasks([...completed, ...active]);
  };

  const getActive = () => {
    setAllBtn(false);
    setActiveBtn(true);
    setCompletedBtn(false);
    setTasks([...active]);
  };

  const clearCompleted = () => {
    setCompleted([]);
    setTasks([...active]);
    setAllTasks([...active]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("active", JSON.stringify(active));
  }, [active]);
  useEffect(() => {
    getAllTasks();
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  }, [allTasks]);
  useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [completed]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        setTasks,
        deleteTask,
        tasks,
        task,
        handleValue,
        handleCompleted,
        completed,
        getCompleted,
        getAllTasks,
        getActive,
        clearCompleted,
        allBtn,
        activeBtn,
        completedBtn,
        active,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
