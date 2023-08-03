// components/ProfileView.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const ProfileView = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_NEXTJS_API_URL' with the actual URL of your Next.js API route
      await axios.post("/api/posts", { text });
      setText("");
      alert("Post submitted successfully!");
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="text">
        <Form.Label>Post Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Add Post</Button>
    </Form>
  );
};

export default ProfileView;
