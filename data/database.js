import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI, { dbName: "node-api" })
        .then((c) => {
            console.log(`mongoDB connected with ${c.connection.host}`);
        })
        .catch((e) => console.log(e));
}