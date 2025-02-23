import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function LandingPage() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Project Management Tool</h1>
      <p>Manage your projects and tasks efficiently!</p>
      <Link to="/login">
        <Button variant="primary" className="m-2">Login</Button>
      </Link>
      <Link to="/register">
        <Button variant="success">Register</Button>
      </Link>
    </Container>
  );
}

export default LandingPage;
