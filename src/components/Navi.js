import logo from '../Logo.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navi = () => {
    return (
        <Navbar expand="xl">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#order">Order Online</Nav.Link>
            <Nav.Link href="#reservations">Reservations</Nav.Link>
            <Nav.Link href="#login">Log in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Navi;