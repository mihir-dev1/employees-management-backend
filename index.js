const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db"); // Import the mongoose instance from db.js
const app = express();
const routers = require("./router/router"); // Import the router

app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:4200"}));

app.use("/api/employees", routers); // Use the employee router

app.listen(3000, () => {   
    console.log("Server is running on port 3000");
});
