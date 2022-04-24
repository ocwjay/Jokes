const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require("./routes/jokes.route");
JokeRoutes(app);

app.listen(8000, () => console.log("The server is going! Check out port 8000"));