const mongoose = require("mongoose");
const dotEnv = require("dotenv");

// Load environment variables before using them
dotEnv.config();

const mongoUrl = process.env.MONGO_URL;

const connectToDb = async () => {
    try {
        if (!mongoUrl) {
            throw new Error("MONGO_URL is not defined in .env file");
        }

        const connected = await mongoose.connect(mongoUrl);

        console.log("✅ MongoDB is connected");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1); // Exit process if DB connection fails
    }
};

module.exports = connectToDb;
