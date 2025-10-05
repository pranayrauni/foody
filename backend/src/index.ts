import express from "express";
import cors from "cors"
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes.js"


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to database")
});

const app = express();
app.use(express.json());
app.use(cors());


app.get("/test", async(req: express.Request, res: express.Response) => {
    res.json({message: 'Hello from backend'})
})

app.get("/health", async(req: express.Request, res: express.Response) => {
    res.send({message: "health ok!"});
})

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
    console.log(`server started at 7000`); 
})

