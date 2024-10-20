import express from "express";
import categoryRouter from "./routes/api/category";
import userCompanyRouter from "./routes/api/userCompany";
// import generalErrorHandler from "./middleware/errorHandling/generalErrorHandler";
// import {
//   authErrorHandler,
//   prismaErrorHandler,
// } from "./middleware/errorHandling";

const app = express();
app.use(express.json());
app.use("/", categoryRouter);
app.use("/", userCompanyRouter);

// app.use(authErrorHandler, prismaErrorHandler, generalErrorHandler);

export default app;