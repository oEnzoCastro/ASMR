const express = require("express");
const routes = require("./postRoutes.js");
const connect = require("./connect.js");
require("dotenv").config({ path: "./config.env" });

const cors = require("cors");
const app = express();
const PORT = 8080;
const corsOptions = {
  origin: [process.env.FRONTEND_URL],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  connect.connectToServer();
  console.log(`Server started on port ${PORT}`);
});
