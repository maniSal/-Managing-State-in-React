import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TaskForm = ({ AddEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError(true);
      return;
    }

    AddEdit({ id: Math.random(), title, description, done: false });

    setTitle("");
    setDescription("");
    setError(false);
  };

  return (
    <div className="container my-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title Of The Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted">
            {error && <div style={{ color: "red" }}>YOU HAVE TO WRITE !!!</div>}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Details Of The Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button className="btn" variant="primary" type="submit">
          Add To The List
        </Button>
      </Form>
    </div>
  );
};

export default TaskForm;
