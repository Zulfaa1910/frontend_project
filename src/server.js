// server.js

const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS
app.use(cors());

// ... other server configurations
app.get("/", (req, res) => {
  res.json({ title: "Sample Title", prince: 100 }); // Replace with actual data
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
