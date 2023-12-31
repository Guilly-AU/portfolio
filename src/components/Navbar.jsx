import { Navbar, Nav, Container } from "react-bootstrap";

function AppHeader() {
  return (
    <Navbar fixed="top" expand="md" bg="myPrimaryLight">
      <Container>
        <Navbar.Brand className="text-primary fs-3 fw-bold" href="#home">
          GD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="flex-grow-0 text-center"
        >
          <Nav className="me-auto fs-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
