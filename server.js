import { app } from "./app.js"
import { connectDB } from "./data/database.js";


//database connection
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
});