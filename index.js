const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Define a sample route
app.get("/", (req, res) => {
  res.send(
    `Hello from Node.js Express MongoDB app!, your key - ${Math.random().toString()}`
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
