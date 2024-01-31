// Import the express library
const express = require("express");
const cors = require("cors");

// Create an instance of express
const app = express();

var corsOptions = {
  origin: ["https://${process.env.CODESPACE_NAME}-3000.app.github.dev", "https://${process.env.CODESPACE_NAME}-8000.app.github.dev"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true
};

app.use((req, res, next) => {
  console.log('Headers:', req.headers);
  next();
});

app.use(cors(corsOptions));
// Define the route handler for the root path
app.get("/", (req, res) => {
  // Send a JSON response
  res.json({ message: "Hello world!" });
});

// Start the server on port 3000
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
