import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Products
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              My Bag ({cartProducts.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
