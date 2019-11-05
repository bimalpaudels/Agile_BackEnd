const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./application/routes/userRoutes");

const application = new express();
application.use(cors());
application.use(bodyParser.json());
application.use(express.static(__dirname + "/public"));
application.use("/", routes);


application.listen(3000, ()=>console.log("Server running on port 3000"));

