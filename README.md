
# **Mock Test App**  
A backend application for managing mock test features using **Node.js**, **TypeScript**, and **MongoDB**. The server runs on **port 3000** and provides an API-first approach to handle users, questions, and mock test sessions.

---

## **Key Features**  

✅ User Management: Register and manage users for mock tests.  
✅ Question Bank: Store and manage a pool of mock test questions.  
✅ Unique Question Allocation: Ensures no question is repeated for a user across multiple mock tests.  
✅ Environment Configuration: Securely manage configurations using `.env`.  

---

## **Getting Started**  

Follow these steps to set up and run the application.

### **1. Clone the Repository**
```bash
git clone https://github.com/ShivamGupta987/MOCK_TEST_BACKEND.git
```

### **2. Navigate to the Project Directory**
```bash
cd MOCK_TEST_BACKEND
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Configure Environment Variables**
Create a `.env` file in the root of the project and add the following:
```env
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
```

### **5. Run the Development Server**
To start the server with live reload using **nodemon**, execute:
```bash
npm run dev
```

The server will be available at:  
**http://localhost:3000**

---

## **API Endpoints**

| **Method** | **Endpoint**           | **Description**                     |
|------------|------------------------|-------------------------------------|
| `GET`      | `/api/users`           | Retrieve all users.                 |
| `POST`     | `/api/users`           | Add a new user.                     |
| `GET`      | `/api/questions`       | Retrieve all questions.             |
| `POST`     | `/api/questions`       | Add a new question.                 |
| `POST`     | `/api/mock-tests`      | Create a new mock test for a user.  |

---

## **Project Structure**

```
mock-test-app/
├── src/
│   ├── controllers/       # Route handlers for business logic
│   ├── models/            # Mongoose schemas and models
│   ├── routes/            # API route definitions
│   ├── middlewares/       # Custom middleware for validation, logging, etc.
│   ├── services/          # Contains reusable business logic
│   ├── utils/             # Utility functions
│   └── app.ts             # Application entry point
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
├── .env                   # Environment variables
└── README.md              # Project documentation
```

---

## **Dependencies**

### **Runtime**
- **[express](https://www.npmjs.com/package/express)**: Web framework for building APIs.
- **[mongoose](https://mongoosejs.com/)**: MongoDB object modeling tool.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Environment variable management.
- **[cors](https://www.npmjs.com/package/cors)**: Middleware for handling cross-origin requests.
- **[morgan](https://www.npmjs.com/package/morgan)**: HTTP request logging middleware.

### **Development**
- **[typescript](https://www.typescriptlang.org/)**: Type-safe JavaScript.
- **[nodemon](https://www.npmjs.com/package/nodemon)**: Automatically restarts the server on file changes.
- **[ts-node](https://www.npmjs.com/package/ts-node)**: Runs TypeScript files directly.
- **[@types](https://www.npmjs.com/package/@types/)**: TypeScript definitions for dependencies.

---

## **How to Contribute**

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request.

---

## **License**

This project is licensed under the **ISC License**.

---

## **Author**

👤 **Shivam Gupta**  
🌐 [GitHub](https://github.com/ShivamGupta987)
