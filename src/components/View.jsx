import React from "react";
import { Card, ProgressBar, Button } from "react-bootstrap";

const View = ({ task, onEdit, onDelete, onSetReminder }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>
          <strong>Description:</strong> {task.description}
        </Card.Text>
        <Card.Text>
          <strong>Start Date:</strong> {new Date(task.startDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          <strong>End Date:</strong> {new Date(task.endDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          <strong>Status:</strong> {task.status}
        </Card.Text>
        <Card.Text>
          <strong>Progress:</strong>
        </Card.Text>
        <ProgressBar now={task.progress} label={`${task.progress}%`} />

        <div className="mt-3">
          <Button variant="warning" className="me-2" onClick={() => onEdit(task)}>
            Edit
          </Button>
          <Button variant="danger" className="me-2" onClick={() => onDelete(task.id)}>
            Delete
          </Button>
          <Button variant="info" onClick={() => onSetReminder(task.id)}>
            Set Reminder
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default View;
