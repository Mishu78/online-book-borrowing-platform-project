import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";

// 1. Safe DNS resolution override for Vercel
if (typeof window === "undefined") {
  try {
    const dns = require("node:dns");
    dns.setDefaultResultOrder('ipv4first');
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
  } catch (err) {
    console.warn("Failed to set DNS servers:", err.message);
  }
}

if (!process.env.MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in environment variables");
}

// 2. Singleton pattern for the MongoDB client to prevent serverless overload
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(process.env.MONGODB_URI);
  clientPromise = client.connect();
}

// Ensure the database name matches your Atlas cluster exactly
const db = client.db("BookBorrowingDB"); 

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: client,
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false, // Prevents automatic sign-in after a user signs up
  },
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  },
  plugins: [
    nextCookies(),
  ],
});