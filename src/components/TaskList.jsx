import React from "react";
import TaskItem from "./TaskItem";
const TaskList = ({ tasks,deleteTask ,toggleDone}) => {
    return (
      <div className="container my-4">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} deleteTask={deleteTask} toggleDone={toggleDone}/>
      ))}
    </div>
  );
  };
  

export default TaskList