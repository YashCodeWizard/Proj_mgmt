import React, { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({ title: "", status: "New" });
  const [editIndex, setEditIndex] = useState(null);

  // Open modal for creating or editing a task
  const handleShow = (index = null) => {
    setEditIndex(index);
    setCurrentTask(index !== null ? tasks[index] : { title: "", status: "New" });
    setShowModal(true);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setCurrentTask({ ...currentTask, [e.target.name]: e.target.value });
  };

  // Save or update task
  const handleSave = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = currentTask;
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, currentTask]);
    }
    setShowModal(false);
  };

  // Delete task
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Task Management</h2>
      <Button variant="primary" onClick={() => handleShow()}>+ Add Task</Button>

      {/* Task List Table */}
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>
                <span className={`badge bg-${task.status === "New" ? "secondary" : task.status === "In Progress" ? "primary" : "success"}`}>
                  {task.status}
                </span>
              </td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => handleShow(index)}>
                  <FaEdit />
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding/Editing Task */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Edit Task" : "Add Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text" name="title" value={currentTask.title} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" value={currentTask.status} onChange={handleChange}>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="success" onClick={handleSave}>{editIndex !== null ? "Update" : "Save"}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskManager;
