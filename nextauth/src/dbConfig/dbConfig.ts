import mongoose from "mongoose";

export async function connect() {
    console.log('first', process.env.MONGOS_URI!)
    try {
        await mongoose.connect(process.env.MONGOS_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });

        connection.on("error", (error) => {
            console.error("MongoDB connection error:", error);
            process.exit()
        });
    } catch (error) {
        console.error('Something went wrong in connecting to DB');
        console.error(error);
    }
}
