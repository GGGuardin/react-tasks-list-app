import { createContext, useState, useEffect } from "react";
import { tasks as data } from "./tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const addTask = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  const deleteTask = (id) => {
    console.log(id)

    const del = tasks.filter((task) => {
        if (task.id != id){
            return task
        }
    })

    setTasks(del)
  }

  return (
    <>
      <TaskContext.Provider value={{
        tasks,
        setTasks,
        addTask,
        deleteTask,
      }}>{props.children}</TaskContext.Provider>
    </>
  );
}
