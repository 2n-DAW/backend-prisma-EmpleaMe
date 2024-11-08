import express from "express";
const cors = require('cors');
import categoryRouter from "./routes/api/category.router";
import userCompanyRouter from "./routes/api/userCompany.router";
import jobRouter from "./routes/api/jobs.router"
import inscriptionRouter from "./routes/api/inscription.router";
//import generalErrorHandler from "./middleware/errorHandling/generalErrorHandler";
// import {
//   authErrorHandler,
//   prismaErrorHandler,
// } from "./middleware/errorHandling";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", categoryRouter);
app.use("/", userCompanyRouter);
app.use("/", jobRouter);
app.use("/", inscriptionRouter);

//app.use(generalErrorHandler);

export default app;