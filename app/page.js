"use client";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import mockPosts from "../data/mockData";
import AddPost from "./components/AddPost";

const ADD_MOCK_DATA = true; // toggle ´true´ or ´false´

const HelloWorld = () => {
  const [posts, setPosts] = useState([]);
  const [showAddNew, setShowAddNew] = useState(false);

  useEffect(() => {
    let existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    if (existingPosts.length === 0 && ADD_MOCK_DATA) {
      existingPosts = mockPosts;
      localStorage.setItem("posts", JSON.stringify(existingPosts));
    }

    if (!Array.isArray(existingPosts)) {
      existingPosts = [];
    }
    existingPosts.sort((a, b) => a.id - b.id);

    setPosts(existingPosts);
  }, []);

  const closeAddNewPost = () => {
    setShowAddNew(false);
    const updatedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(updatedPosts);
  };

  return (
    <>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.text}</p>
            <img src={post.imageUrl} alt="Post" height={100} width={80} />
          </div>
        ))}
      </div>
      <Button onClick={() => setShowAddNew(true)} variant="primary">
        Add new post
      </Button>
      {showAddNew && <AddPost close={closeAddNewPost} />}
    </>
  );
};

export default HelloWorld;
