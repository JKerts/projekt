// server.js

const express = require("express");
const app = express();

// Import the API routes
const apiRoutes = require("./api.js");

// Add middleware to handle API requests
app.use("/api", apiRoutes);

// Your other server configurations and middleware (if any) go here

// Start the server
const port = 5000; // You can choose any port you prefer
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
