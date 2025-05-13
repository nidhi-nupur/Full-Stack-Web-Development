import express from "express";

const app = express();
const port = 3000;

// ✅ DIY middleware function
function logger(req, res, next) {
  console.log(`[${new Date().toString()}] ${req.method} ${req.url}`);
  next(); // Pass the control to the next middleware or route
}

app.use(logger); // Use the middleware

// Example route
app.get("/", (req, res) => {
  res.send("Hello, world");
});


// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
