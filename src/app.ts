import express from "express";


//  importing user routes

import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middleware/error.js";

const port = 3000;

connectDB();

const app = express();

app.use(express.json());



app.get("/", (req, res) => {
  res.send("Api Working with /api/v1");
});

// using routes
app.use("/api/v1/user", userRoute);



app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
