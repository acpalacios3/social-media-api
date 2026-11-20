// In server.js, build a simple Express application that connects to your MongoDB database. The server should:
// * Require express, mongodb, and dotenv.
// * Load environment variables from the .env file.
// * Create an Express app instance.
// * Define a port (e.g., 3001).
// * Use the MongoClient to connect to the database using the URI from your environment variables.
// *Create a single GET route at / that, upon a successful database connection, 
// sends back a JSON response: { message: "Successfully connected to the database!" }. 
// If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.


// Require express, mongodb, and dotenv.
import 'dotenv/config';
import express from 'express';
import { MongoClient } from 'mongodb';

// Load environment variables from the .env file.
const URI = process.env.MONGO_URI;

// Create an Express app instance.
const app = express();

// Define a port (e.g., 3001).
const port = 3001;

// Create MongoDB client
const client = new MongoClient(URI);


// Use the MongoClient to connect to the database using the URI from your environment variables.
const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB!');
        return true;

    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        return false;
    }
};


// Create a single GET route at / that, upon a successful database connection
// sends back a JSON response: { message: "Successfully connected to the database!" }. 
// If the connection fails, it should send a 500 status code with a message: 
// { message: "Failed to connect to the database." }.

app.get("/", async (req, res) => {
    const isConnected = await connectDB();

    if (isConnected) {
        return res.status(200).json({
            message: "Successfully connected to the database!"
        });
    }

    return res.status(500).json({
        message: "Failed to connect to the database."
    });
});

// start the server

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})