import { NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function NavScrollExample() {
    const cartProducts=useSelector(state=>state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux-toolkit</Navbar.Brand>
            <Nav.Link to='/' as={Link}>Product</Nav.Link>

        <NavbarToggle />
        <NavbarCollapse className='justify-content-end'>
            <Nav.Link to='/cart' as={Link}>My bag {cartProducts.length}</Nav.Link>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;