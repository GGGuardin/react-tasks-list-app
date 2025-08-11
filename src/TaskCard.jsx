import { TaskContext } from "./TaskContext";
import { useContext } from "react";

function TaskCard({ taskData }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <>
      <div className=" bg-black text-white rounded-md gap-5 mt-4 ml-2">
        <h3 className="text-white gap-2 p-4 text-xl font-bold">
          Task: {taskData.name}. Description: {taskData.description}
        </h3>
        <button className=" bg-red-700 px-2 py-1 rounded-md mt-4 mb-4 ml-4 hover:bg-red-600" onClick={() => deleteTask(taskData.id)}>Delete task</button>
      </div>
    </>
  );
}

export default TaskCard;
