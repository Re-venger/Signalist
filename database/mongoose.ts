import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("MongoDB URI should be set in .env");
}

declare global {
    var mongooseCache:
        | {
              con: typeof mongoose | null;
              promise: Promise<typeof mongoose> | null;
          }
        | undefined;
}

type MongooseCache = {
    con: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

const cached: MongooseCache = global.mongooseCache ?? {
    con: null,
    promise: null,
};
global.mongooseCache = cached;

export const connectToDatabase = async () => {
    if (cached.con) {
        return cached.con;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        });
    }

    try {
        cached.con = await cached.promise;
        return cached.con;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    console.log(
        `Connected to Database ${process.env.NODE_ENV} - ${MONGODB_URI}`
    );
};

export {};
