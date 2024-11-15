import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Edit = ({ task, onClose, onUpdateTask }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTask(updatedTask); // Pass the updated task to the parent component
    onClose(); // Close the modal
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          name="startDate"
          value={updatedTask.startDate}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          name="endDate"
          value={updatedTask.endDate}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select
          name="status"
          value={updatedTask.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Progress (%)</Form.Label>
        <Form.Control
          type="number"
          name="progress"
          value={updatedTask.progress}
          onChange={handleChange}
          min="0"
          max="100"
          required
        />
      </Form.Group>

      <Button variant="warning" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default Edit;
