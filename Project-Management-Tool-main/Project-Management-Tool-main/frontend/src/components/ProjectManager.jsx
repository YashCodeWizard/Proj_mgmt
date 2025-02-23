import React, { useState } from "react";
import { Button, Modal, Form, ListGroup, Card } from "react-bootstrap";

const ProjectManager = ({ projects, setProjects, showProjectManager, toggleProjectManager }) => {
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  // Handle modal open/close
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle input changes
  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  // Add a new project
  const handleAddProject = () => {
    if (newProject.name.trim() === "") return;

    setProjects([...projects, { id: projects.length + 1, ...newProject }]);
    setNewProject({ name: "", description: "" }); // Reset form
    handleClose();
  };

  return (
    <div className="mt-3">
      <div className="text-center">
        <Button variant="dark" size="lg" onClick={handleShow}>
          + Add New Project
        </Button>
      </div>

      {/* Show Projects List if "View Projects" is clicked */}
      {showProjectManager && (
        <Card className="mt-3 p-3">
          <h4 className="text-center">Projects</h4>
          {projects.length > 0 ? (
            <ListGroup>
              {projects.map((project) => (
                <ListGroup.Item key={project.id}>
                  <strong>{project.name}</strong> - {project.description}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p className="text-center mt-2">No projects available</p>
          )}
          <div className="text-center mt-3">
            <Button variant="secondary" onClick={toggleProjectManager}>
              Hide Projects
            </Button>
          </div>
        </Card>
      )}

      {/* Modal for Adding New Project */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newProject.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newProject.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddProject}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectManager;
