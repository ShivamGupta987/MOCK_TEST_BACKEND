# Mock Test App

This is a backend application for managing mock test features. It is built with **Node.js**, **TypeScript**, and **MongoDB**. The application runs on **port 3000**.

---

## Features

- **User Management**: Manage users who take mock tests.
- **Mock Tests**: Manage mock test sessions and questions.
- **Question Tracking**: Ensure users don’t get repeated questions across tests.
- **Environment Configuration**: `.env` file support for secure environment variables.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShivamGupta987/MOCK_TEST_BACKEND.git
Navigate to the project directory:

bash
Copy
Edit
cd MOCK_TEST_BACKEND
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root of the project and add the following:

env
Copy
Edit
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
Scripts
Start the Development Server
To run the development server with live reload using nodemon, run:

bash
Copy
Edit
npm run dev
The server will start at: http://localhost:3000.

Project Structure
bash
Copy
Edit
mock-test-app/
├── src/
│   ├── controllers/       # Contains route handler logic
│   ├── models/            # Mongoose schemas and models
│   ├── routes/            # API route definitions
│   ├── middlewares/       # Custom middleware
│   ├── services/          # Business logic and utilities
│   ├── utils/             # Helper functions
│   └── app.ts             # Application entry point
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
├── .env                   # Environment variables
└── README.md              # Project documentation
Dependencies
Runtime
express: Web framework for Node.js.
mongoose: MongoDB object modeling tool.
dotenv: For loading environment variables.
cors: Middleware for Cross-Origin Resource Sharing.
morgan: HTTP request logger middleware.
Development
typescript: For using TypeScript in the project.
nodemon: Automatically restarts the server on file changes.
ts-node: TypeScript execution engine for Node.js.
@types/: TypeScript definitions for dependencies.
