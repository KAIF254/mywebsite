const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

// API route
app.post("/upload", upload.single("image"), (req, res) => {
  
  // For now dummy response
  res.json({
    result: "Person Standing 🧍"
  });

});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
