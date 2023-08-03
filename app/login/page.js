import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const logIn = () => {
    sessionStorage.setItem("loggedInUser", username);
    location.href = "/";
  };

  return (
    <Form onSubmit={handleSubmit} action="#login">
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={logIn}
        disabled={username.length < 3 || password.length < 3}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginPage;
