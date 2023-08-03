// pages/api/posts.js

export default function handler(req, res) {
  if (req.method === "POST") {
    // Handle the POST request to submit the post
    const { text } = req.body;

    // In a real application, you might want to perform additional validation
    // and associate the post with the currently logged-in user.

    // For this example, we'll just store the post data in localStorage.
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const newPost = { text, createdAt: new Date().toISOString() };
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    res
      .status(200)
      .json({ message: "Post submitted successfully", post: newPost });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
