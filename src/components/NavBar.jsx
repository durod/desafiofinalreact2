import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar expand="lg" className=" fixed-top navbar-estilo">
      <Container>
        <NavLink className={`NavLink-margin ${setActiveClass}`} to="/">
          {" "}
          <Navbar.Brand>🍕 Pizzería Mamma Mia!</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={`NavLink-margin ${setActiveClass}`} to="/Car">
              {" "}
              🛒Carrito{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
