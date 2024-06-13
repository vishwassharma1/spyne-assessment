Spyne Assessment Project
 <!-- Replace with your project logo or relevant image -->

This repository contains the implementation of a microservices-based backend system for handling user management, discussions, comments, interactions, and a gateway. Each microservice is designed to be independent and scalable, encapsulated within Docker containers for easy deployment and management.

Features
User Service: Manages user registration, authentication, and profile management.
Discussion Service: Handles creation, retrieval, and management of discussions with support for hashtags and image attachments.
Comment Service: Allows users to comment on discussions and interact with comments.
Interaction Service: Manages likes, views, and other interactions associated with posts and comments.
Gateway: Provides a unified entry point for clients to access all services via a single endpoint.
Technologies Used
Node.js: Backend JavaScript runtime.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing application data.
Docker: Containerization for each microservice.
JWT: JSON Web Tokens for secure authentication.
Prerequisites
Before running the application, ensure you have the following installed:

Node.js (with npm)
Docker
MongoDB (or MongoDB Atlas for cloud deployment)
Getting Started
Follow these steps to get the project up and running on your local machine:

Clone the repository:


git clone https://github.com/vishwassharma1/spyne-assessment.git
cd spyne-assessment
Set up environment variables:

Each service (user-service, discussion-service, etc.) has its own .env file. Copy the provided .env.example file in each service directory and update the values as required.

Build and run using Docker:

docker-compose up --build
This command will build and start all services defined in the docker-compose.yml file.

Access the services:

Once Docker containers are up and running, you can access each service via its respective port:

User Service: http://localhost:5000
Discussion Service: http://localhost:5001
Comment Service: http://localhost:5002
Interaction Service: http://localhost:5003
Gateway: http://localhost:8000
Testing APIs:

Use a tool like Postman to test the APIs. Import the provided Postman collection (postman_collection.json) for a list of available endpoints and sample requests.

API Documentation
For detailed API documentation, refer to the Postman collection included in this repository (postman_collection.json).

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

License
This project is licensed under the MIT License.

Contact
For questions or feedback, please contact Vishwas Sharma at vsharma7100@gmail.com.


