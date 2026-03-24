import { Container } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
    >
      <div className="text-center">
        <h1 className="display-4 fw-bold">Landing Page</h1>
        <p className="lead text-secondary">
          Em breve — construída com Figma MCP + GitHub Copilot
        </p>
      </div>
    </Container>
  );
}

export default App;
