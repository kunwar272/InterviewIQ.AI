import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 10000, // fail fast after 10s
        })
        console.log("✅ DataBase Connected")
    } catch (error) {
        console.error("❌ DataBase Connection Failed:", error.message)
        console.error("👉 Fix: Whitelist your IP in MongoDB Atlas → Network Access")
    }
}

export default connectDb