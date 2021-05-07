require('dotenv').config();
// Import express and mongoose
const express = require('express');
const mongoose = require('mongoose');
// cors allows us to do requests from different devices without compromise
const cors = require('cors');
const routes = require('./routes');
const app = express();


// This line is needed for later deployment
const port = process.env.PORT || 5000;

// Telling the app to use cors, express.json, and routes
//cors = Cross-Origin Resource Sharing - allow or restrict requested resources on a web server
app.use(cors());
app.use(express.json());
app.use(routes);

// Connecting our database
try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log('MongoDB connected sucessfully!');
} catch (error) {
  console.log(error);
}


// if in production - point to React app
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static('client/build'));

  // Right before your app.listen(), add this:
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API Running");
  });
}

// Listen for whatever PORT is set
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});