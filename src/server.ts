const cors = require('cors');
import app from "./app";

const CORSURL = process.env.CORSURL;
const corsOptions = {
  origin: CORSURL,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

console.log(`Server is running on port ${port}`);
console.log(` ${process.env.DATABASE_URL}`);

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

process.on("SIGTERM", function () {
  console.log(`SIGTERM signal received: closing HTTP server.`);
  process.exit();
});

process.on("SIGINT", function () {
  console.log(`SIGINT signal received: closing HTTP server.`);
  process.exit();
});