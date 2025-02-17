const express = require("express");
const routes = require("./postRoutes.js");
const connect = require("./connect.js");

const cors = require("cors");
const app = express();
const PORT = 8080;
const corsOptions = {
  origin: ["https://asmr-six.vercel.app/"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  connect.connectToServer();
  console.log(`Server started on port ${PORT}`);
});
