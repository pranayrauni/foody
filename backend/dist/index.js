import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes.js";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log("Connected to database");
});
const app = express();
app.use(express.json());
app.use(cors());
app.get("/test", async (req, res) => {
    res.json({ message: 'Hello from backend' });
});
app.use("/api/my/user", myUserRoute);
app.listen(7000, () => {
    console.log(`server started at 7000`);
});
//# sourceMappingURL=index.js.map