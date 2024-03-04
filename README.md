# Simple REST API with Node.js and Postman

## Overview

This project is a simple REST API implementation using Node.js and Postman. It provides basic functionality for performing CRUD (Create, Read, Update, Delete) operations on resources via HTTP requests. The API follows RESTful principles and can be used as a starting point for building more complex web applications.

## Features

- Create, read, update, and delete resources using HTTP methods (GET, POST, PUT, DELETE).
- JSON format for data exchange between the client and the server.
- Basic error handling and status code responses.
- Integration with Postman for testing and interacting with the API endpoints.

## Technologies Used

- Node.js: JavaScript runtime for building server-side applications.
- Express.js: Web application framework for Node.js used to create the REST API endpoints.
- Postman: Collaboration platform for API development used for testing and interacting with the API.

## Usage

1. Clone or download the repository to your local machine.
2. Install the required dependencies using npm (`npm install`).
3. Start the server by running the provided script or command (e.g., `node server.js`).
4. Import the provided Postman collection (`Simple_REST_API.postman_collection.json`) into Postman.
5. Use Postman to send HTTP requests to the API endpoints and observe the responses from the server.
6. Test the CRUD operations on resources and verify the functionality of the API.

## Endpoints

- `GET /resources`: Retrieve a list of all resources.
- `GET /resources/{id}`: Retrieve a specific resource by ID.
- `POST /resources`: Create a new resource.
- `PUT /resources/{id}`: Update an existing resource by ID.
- `DELETE /resources/{id}`: Delete a resource by ID.

## Example

```javascript
// Example usage of the API with Node.js and axios

const axios = require('axios');

// GET request to retrieve all resources
axios.get('http://localhost:3000/resources')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// POST request to create a new resource
axios.post('http://localhost:3000/resources', { data: 'New resource' })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
