import mongoose from "mongoose";

type ConnectObject = {
    isConnected?: number
}

const connection: ConnectObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('connection is already connected')
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || "", {})
        connection.isConnected = db.connections[0].readyState
        console.log('Db connnected successfully')
    } catch (error) {

        console.log('database connection failed', error)
        process.exit(1)
    }
}

export default dbConnect