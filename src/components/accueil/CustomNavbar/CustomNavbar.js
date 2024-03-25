import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from "../../../Assets/logo.jpg";
import "../../accueil/style.css";

function CustomNavbar() {
  return (
    <Navbar bg="black" variant="dark" className="custom-navbar">
      <Image src={logo} alt="Votre Logo" height="90" width="200" />
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Accueil
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Se connecter
        </Nav.Link>
        <Nav.Link as={Link} to="/inscription">
          S'inscrire
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
