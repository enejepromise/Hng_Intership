## Project Overview
This Node.js project implements a simple RESTful API with an endpoint /me that serves user profile information together with a dynamic cat fact fetched live from the Cat Facts API.

It demonstrates essential backend skills such as external API integration, JSON response formatting, dynamic timestamp generation, and robust error handling.

## Features GET /me endpoint returns:

User profile info (email, full name, backend stack)

Current UTC timestamp in ISO 8601 format

A random cat fact fetched dynamically from Cat Facts API

Graceful handling of failures when the external API is unreachable or slow

CORS enabled to allow frontend app access

Environment variables for configurable user data and port

Basic logging of errors

Setup Instructions Prerequisites Node.js installed (version 16+ recommended)

A terminal with git and npm available

## Installation Clone the repository:

bash git clone cd profile-api Install dependencies:

bash npm install Create a .env file in the root directory and add the following environment variables:

text USER_EMAIL=your.email@example.com USER_NAME=Your Full Name USER_STACK=Node.js/Express PORT=3000

Running the Project Locally Start the server with:

bash node index.js The server listens on the port specified in .env (default 3000).

You can test the API using:

Browser: Navigate to http://localhost:3000/me

Curl:

bash curl http://localhost:3000/me Postman or any API client

You will receive a JSON response like:

json { "status": "success", "user": { "email": "your.email@example.com", "name": "Your Full Name", "stack": "Node.js/Express" }, "timestamp": "2025-10-20T20:00:00.000Z", "fact": "Cats have five toes on their front paws but only four on the back paws." } Dependencies express: Web framework for creating API endpoints

axios: HTTP client to fetch data from external Cat Facts API

dotenv: Loads environment variables from .env file

cors: Enables Cross-Origin Resource Sharing headers

To install all dependencies at once:

bash npm install express axios dotenv cors Environment Variables Variable Description Example USER_EMAIL Your email address for profile you@example.com USER_NAME Your full name John Doe USER_STACK Your backend tech stack Node.js/Express PORT Port for local server 3000 Notes The Cat Facts API request times out after 2 seconds; if the external service is down, a fallback message is returned.

ISO 8601 timestamp ensures universal time consistency.

CORS is enabled by default, allowing fetches from browsers during development.

For production, consider adding rate limiting and more advanced logging.

Contact For questions or feedback:

Name: Full Name

Email: email@example.com

This README provides all you need to run and understand the /me API project simply and effectively.