import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI, { dbName: "node-api" })
        .then(() => {
            console.log("mongoDB connected");
        })
        .catch((e) => console.log(e));
}