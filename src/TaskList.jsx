import { useState, useEffect, useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "./TaskContext";

function TaskList() {
  const { tasks, setTask, addTask } = useContext(TaskContext);

  if (tasks.length == 0) {
    return (
      <>
        <div className="mx-auto max-w-md">
          <h1 className="text-white text-4xl mt-4 mb-10 font-bold">没有任务!</h1>
        </div>
        <div className="max-w-md mx-auto mt-2 bg-black p-8 rounded-2xl">
          <h1 className="font-bold text-white mb-5 text-2xl"> Add task </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const n = document.getElementById("name");
              const d = document.getElementById("description");

              const newTask = {
                id: tasks.length,
                name: n.value,
                description: d.value,
              };

              if (n.value != "" && d.value != "") {
                addTask(newTask);
              }

              n.value = "";
              d.value = "";

              console.log(tasks);
            }}
          >
            <input
              type="text"
              id="name"
              className="bg-white w-full p-3 mb-4"
              placeholder="Task name"
            ></input>
            <textarea
              type="text"
              id="description"
              className="bg-white w-full h-30 p-3"
              placeholder="Description"
            ></textarea>
            <button className="bg-white p-3 rounded-md hover:bg-green-200 font-bold text-gray-800">
              Add Task
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 p-2">
        {tasks.map((task) => {
          return <TaskCard key={task.id} taskData={task} />;
        })}
      </div>
      <div className="max-w-md mx-auto mt-2  bg-black p-8 rounded-2xl">
        <h1 className="font-bold text-white mb-5 text-2xl"> Add task </h1>
        <form
          className="bg-zinc-900"
          onSubmit={(e) => {
            e.preventDefault();

            const n = document.getElementById("name");
            const d = document.getElementById("description");

            const newTask = {
              id: tasks.length,
              name: n.value,
              description: d.value,
            };

            if (n.value != "" && d.value != "") {
              addTask(newTask);
            }

            n.value = "";
            d.value = "";

            console.log(tasks);
          }}
        >
          <input
            type="text"
            id="name"
            className="bg-white w-full p-3 mb-4"
            placeholder="Task name"
          ></input>
          <textarea
            type="text"
            id="description"
            className="bg-white w-full h-30 p-3"
            placeholder="Description"
          ></textarea>
          <button className="bg-white p-3 rounded-md hover:bg-green-200 font-bold text-gray-800">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskList;
