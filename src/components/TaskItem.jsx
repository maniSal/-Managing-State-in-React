import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './taskitem.css';
import { text } from "express";
const TaskItem =({task ,deleteTask,toggleDone})=>{
  //console.log(task)
  //console.log("TaskItem props:", task, deleteTask);
    return(
        <div>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{task.title}</Accordion.Header>
        <Accordion.Body>
        {task.description}
        <div className="btn">
        <Button variant="success" onClick={()=>toggleDone(task.id)}>done</Button>
      <Button variant="warning">Edit</Button>
      <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
      
        </div>
        </Accordion.Body>
        
      </Accordion.Item>
      
    </Accordion>
        </div>
    )
}
//console.log("TaskItem props:", task, deleteTask);

export default TaskItem