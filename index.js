const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

// Database URI
const CONNECTION_URL =
  "mongodb+srv://1703623:2158258@cluster0.qr0fb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// connection part
mongoose.connect(CONNECTION_URL, () => {
  console.log("Connected to DataBase");
});

const create = require("./router/create");
const get = require("./router/get.js");
const update = require("./router/update.js");
const deleted = require("./router/delete");
// API
app.use("/create", create);
app.use("/get", get);
app.use("/update", update);
app.use("/delete", deleted);

app.listen(5000, () => {
  console.log(`Running on port 5000`);
});
