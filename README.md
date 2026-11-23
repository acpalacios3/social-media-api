## Connecting a Database – Social Media API

## Description

This project demonstrates how to connect a Node.js/Express application to a MongoDB Atlas database.
This activity is to establish the initial backend infrastructure for a social media platform by creating a MongoDB Atlas cluster, configuring database access, and establishing a secure database connection using environment variables.

## Objectives

Set up a new project in MongoDB Atlas.
Create and configure a MongoDB Atlas database cluster.
Create a database user with read and write permissions.
Connect a Node.js/Express application to MongoDB Atlas.
Use environment variables to protect sensitive database credentials.
Configure an Express server with a GET endpoint.

## Technologies Used

Node.js: JavaScript runtime environment.
Express.js: Framework for building the backend server and API routes.
MongoDB: NoSQL database used to store application data.
MongoDB Node.js Driver: Allows the application to connect and interact with MongoDB.
dotenv: Loads environment variables from a .env file.

## Installation and Setup

1. Initialize the Project
npm init -y

2. Install Dependencies
npm install express mongodb dotenv

3. Configure Environment Variables
Create a .env file in the root directory and add your MongoDB Atlas connection string:

MONGO_URI="your_mongodb_connection_string"

Never share your database credentials or upload your .env file to GitHub.

4. Configure .gitignore
Add the following entries to your .gitignore file:

node_modules/
.env

## Security Considerations:

Database credentials are stored in environment variables.
The .env file is excluded from GitHub using .gitignore.
MongoDB Atlas network access controls determine which IP addresses can connect to the database.
In a production environment, network access should be restricted to trusted IP addresses instead of allowing connections from anywhere (0.0.0.0/0).

## Running the Application

Start the server using:

node server.js

If the database connection is successful, the application displays a confirmation message in the terminal.
$ node server.js
Server running on port: 3001
Connected successfully to MongoDB!

Open the following URL in your browser or Postman:

http://localhost:3001/



