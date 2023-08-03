// components/AddPost.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddPost = ({
  close = () => {} // empty callback by default
}) => {
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const newPost = {
      text,
      imageFile: imageFile || undefined,
      imageURL,
      user: sessionStorage.getItem("loggedInUser") || undefined,
      id: existingPosts.length > 0 ? existingPosts[existingPosts.length -1].id + 1 : 1
    };

    try {
      console.log(localStorage.getItem("posts"));
      console.log(existingPosts);
      existingPosts.push(newPost);
      console.log(existingPosts);

      localStorage.setItem("posts", JSON.stringify(existingPosts));
      close(); // closing the dialog and refreshing all posts
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
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <Form.Text className="text-muted">OR</Form.Text>
        <Form.Label>Upload Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      </Form.Group>
      <Button variant="primary"type="submit">Add Post</Button>
      <Button onClick={close} variant="secondary">Close</Button>
    </Form>
  );
};

export default AddPost;
