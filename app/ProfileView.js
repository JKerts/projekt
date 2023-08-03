// ProfileView.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const ProfileView = () => {
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", text);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API endpoint
      await axios.post("http://localhost:5001/api/posts", formData);
      setText("");
      setImageFile(null);
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
      <Form.Group controlId="image">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      </Form.Group>
      <Button type="submit">Add Post</Button>
    </Form>
  );
};

export default ProfileView;
