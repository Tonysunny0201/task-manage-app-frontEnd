import React, { useState } from 'react'
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import AddTask from "../components/Add";
import EditTask from "../components/Edit";
import ViewTask from "../components/View";


const Landing = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Submit Project Report",
      description: "Complete and submit the final project report to the manager.",
      startDate: "2024-11-12",
      endDate: "2024-11-20",
      status: "In Progress",
      progress: 70,
    },
  ]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Handlers for add, edit, delete, and set reminder
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]); // Add task with a unique ID
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setShowEdit(true);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleSetReminder = (taskId) => {
    alert(`Reminder set for task ID: ${taskId}`);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center">Task Management Dashboard</h1>
      <Row className="mb-4">
        <Col className="text-center">
          <Button variant="primary" onClick={() => setShowAdd(true)}>
            Add Task
          </Button>
        </Col>
      </Row>

      {/* Display Tasks */}
      {tasks.map((task) => (
        <ViewTask
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSetReminder={handleSetReminder}
        />
      ))}

      {/* Add Task Modal */}
      <Modal show={showAdd} onHide={() => setShowAdd(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTask onClose={() => setShowAdd(false)} onAddTask={handleAddTask} />
        </Modal.Body>
      </Modal>

      {/* Edit Task Modal */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTask task={currentTask} onClose={() => setShowEdit(false)} onUpdateTask={handleUpdateTask} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Landing;
