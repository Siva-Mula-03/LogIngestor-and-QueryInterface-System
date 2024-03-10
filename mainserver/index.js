const express = require("express");
const app = express();
const routes = require("./api/routes/routeindex");
const cors = require("cors");
const bodyParser = require("body-parser");


//database connection
require("./db_connection");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
);

// Route
app.use("/", routes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
