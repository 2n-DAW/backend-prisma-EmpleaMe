import express from "express";
import categoryRouter from "./routes/api/category";
// import userRouter from "./routes/api/user";
// import profilesRouter from "./routes/api/profiles";
// import articlesRouter from "./routes/api/articles";
// import tagsRouter from "./routes/api/tags";
import generalErrorHandler from "./middleware/errorHandling/generalErrorHandler";
import {
  authErrorHandler,
  prismaErrorHandler,
} from "./middleware/errorHandling";

const app = express();

// Allows parsing of json in the body of the request.
app.use(express.json());

app.use("/api/users", categoryRouter);

// app.use("/api/user", userRouter);

// app.use("/api/profiles", profilesRouter);

// app.use("/api/articles", articlesRouter);

// app.use("/api/tags", tagsRouter);

app.get("/", function (_req, res) {
  return res.send("This is just the backend for RealWorld");
});

app.use(authErrorHandler, prismaErrorHandler, generalErrorHandler);

export default app;
