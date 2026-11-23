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

## Set Up the MongoDB Atlas Cluster

MongoDB Atlas Configuration

MongoDB Atlas is a cloud-based database service that allows developers to create, manage, and access MongoDB databases without installing a database server locally.

For this project, MongoDB Atlas was configured to provide a cloud database for the application.
https://account.mongodb.com/

**Configuration Steps:**

* Create a MongoDB Atlas Account and Project
  Access MongoDB Atlas.
  Sign in or create a new account.
  Create a new project within the organization.

* Create a Database Cluster
  Create a new cluster using the free M0 tier.
  The M0 tier provides a free cloud database for development (aws, Google Cloud, Azure).

* Create a Database User
  Create a database user with a username and secure password.
  Assign the Read and write to any database permission.
  This user will be used by the application to access the database.

* Configure Network Access
  Add 0.0.0.0/0 to the IP Access List.
  This configuration allows connections from any IP address.

* Get the Connection String

  Once the cluster is deployed, select Connect.
  Choose Drivers.
  Select Node.js as the driver.
  Copy the MongoDB connection string to use in the application.

Note: image/   lab screens


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
Never expose database passwords or connection strings in the source code.


## Running the Application

Start the server using:

node server.js

If the database connection is successful, the application displays a confirmation message in the terminal.
$ node server.js
Server running on port: 3001
Connected successfully to MongoDB!

Open the following URL in your browser or Postman:

http://localhost:3001/



