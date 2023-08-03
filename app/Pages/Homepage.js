// Homepage.js (example)

import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the list of posts from the backend API
    // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API endpoint
    axios
      .get("YOUR_BACKEND_API_URL/posts")
      .then((response) => {
        setPosts(response.data); // Update the posts state with the fetched posts
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      {/* Display the list of posts */}
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.text}</p>
          <img src={post.imageUrl} alt="Post" />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
