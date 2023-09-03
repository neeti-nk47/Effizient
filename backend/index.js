import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import userRoutes from "./routes/userRoutes.js";
import sendMail from "./controllers/sendMail.js";

dotenv.config();

const app = express();

const port = 8000;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));

app.use("/api/userData", userRoutes);

app.use("/api/mailUser", sendMail);

app.get("/", async (req, res) => {
  res.send("Working");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(process.env.PORT || port, () =>
      console.log("Server has started on port", port)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
