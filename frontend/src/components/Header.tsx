"use client";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link href="/">
            <Navbar.Brand>Mi Tienda de Libros</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Link href="/"> */}
              <Nav.Link>Inicio</Nav.Link>
              {/* </Link> */}
              {/* <Link href="/about"> */}
              <Nav.Link>Acerca de</Nav.Link>
              {/* </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
