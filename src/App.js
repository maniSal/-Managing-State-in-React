
import { useEffect, useState } from 'react';
import './App.css';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
 // localStorage.removeItem("tasks");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      {
        id: Math.random(),
        title: "sport",
        description: "go to the gym",
        done: false,
      },
      {
        id: Math.random(),
        title: "reading",
        description: "go to the library",
        done: false,
      }
    ];
  });
  useEffect(()=>{
    
localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks]);
  const addTask=(newTask)=>{
    setTasks([...tasks,newTask]) // like a push functionat the last of the table
  
  }

  const deleteTask = (id) => {
    if (window.confirm('You Are Sure You Want Delete This!!')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };
  
  const toggleDone=(id)=>{
    setTasks(tasks.map(task=>task.id === id ?{...task,done:!task.done}:task))

  }
  return (
    <div className="App">
     <h1>My todo list</h1>
     <TaskForm AddEdit={addTask}></TaskForm>
     <TaskList
  tasks={tasks}
  deleteTask={deleteTask}
  toggleDone={toggleDone}  
/>



  
    </div>
  );
}


export default App;
