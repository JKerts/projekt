// app/components/NavBar.js
"use client";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const NavbarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(undefined);

  useEffect(() => {
    // Check if the user is logged in by checking for the presence of 'loggedInUser' in sessionStorage
    const user = sessionStorage.getItem("loggedInUser");
    setIsLoggedIn(!!user);
    setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    // Handle the logout process by clearing the user session
    setIsLoggedIn(false);
    setLoggedInUser(undefined);
    sessionStorage.removeItem("loggedInUser");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link href="/">
          <Navbar.Brand>Menstagram - from men, for men!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link>{loggedInUser}</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
                <Nav.Link href="/login">Login</Nav.Link>
            )}
              <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
