import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const MONGODB_URI = process.env.MONGO_DB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️  Please set MONGODB_URI in your .env file");
}

async function testConnection() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`✅ Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Connection error:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

testConnection();
