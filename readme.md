# 🚀 Primetrade Backend Internship Project

This repository hosts the **secure and scalable REST API** backend for the Primetrade internship assignment. The application is built on **Node.js (Express)** and utilizes **MySQL** with **Sequelize ORM** to deliver robust authentication, granular role-based access control, and comprehensive CRUD operations for tasks and users.

It is designed with a modular structure, ready for seamless integration with any modern frontend framework (React, Vue, Angular).

---

## ✨ Core Features

- **User Authentication**: Secure registration and login using **JSON Web Tokens (JWT)**.
- **Role-Based Access Control (RBAC)**: Distinct permissions for `Admin` and standard `User` roles.
- **Task Management**: Full **CRUD** (Create, Read, Update, Delete) APIs for managing personal tasks.
- **User Management (Admin Only)**: Dedicated endpoints for administrators to manage user accounts.
- **Data Security**: Passwords are securely hashed using **bcrypt**.
- **Robustness**: Comprehensive input validation and centralized error handling.
- **Maintainability**: Clear API versioning and a modular, easily navigable project structure.

---

## 🛠 Tech Stack

| Category     | Technology            | Description                                          |
| :----------- | :-------------------- | :--------------------------------------------------- |
| **Backend**  | **Node.js (Express)** | JavaScript runtime and unopinionated web framework.  |
| **Database** | **MySQL**             | Open-source relational database for structured data. |
| **ORM**      | **Sequelize**         | Promise-based Node.js ORM for MySQL.                 |
| **Security** | `bcrypt`              | Hashing library for secure password storage.         |
| **Auth**     | `jsonwebtoken` (JWT)  | For stateless user authentication.                   |
| **Tools**    | `dotenv`              | Management of environment variables.                 |

---

## ⚙️ Folder Structure

The project follows a standard, scalable structure with clear separation of concerns:

That's a very comprehensive and well-structured draft! I can certainly take that excellent content and format it into a professional, polished, and submission-ready README.md file. I'll incorporate the testing instructions, as you suggested, to make it fully complete.

Here is the final, ready-to-copy README.md:

Markdown

# 🚀 Primetrade Backend Internship Project

This repository hosts the **secure and scalable REST API** backend for the Primetrade internship assignment. The application is built on **Node.js (Express)** and utilizes **MySQL** with **Sequelize ORM** to deliver robust authentication, granular role-based access control, and comprehensive CRUD operations for tasks and users.

It is designed with a modular structure, ready for seamless integration with any modern frontend framework (React, Vue, Angular).

---

## ✨ Core Features

- **User Authentication**: Secure registration and login using **JSON Web Tokens (JWT)**.
- **Role-Based Access Control (RBAC)**: Distinct permissions for `Admin` and standard `User` roles.
- **Task Management**: Full **CRUD** (Create, Read, Update, Delete) APIs for managing personal tasks.
- **User Management (Admin Only)**: Dedicated endpoints for administrators to manage user accounts.
- **Data Security**: Passwords are securely hashed using **bcrypt**.
- **Robustness**: Comprehensive input validation and centralized error handling.
- **Maintainability**: Clear API versioning and a modular, easily navigable project structure.

---

## 🛠 Tech Stack

| Category     | Technology            | Description                                          |
| :----------- | :-------------------- | :--------------------------------------------------- |
| **Backend**  | **Node.js (Express)** | JavaScript runtime and unopinionated web framework.  |
| **Database** | **MySQL**             | Open-source relational database for structured data. |
| **ORM**      | **Sequelize**         | Promise-based Node.js ORM for MySQL.                 |
| **Security** | `bcrypt`              | Hashing library for secure password storage.         |
| **Auth**     | `jsonwebtoken` (JWT)  | For stateless user authentication.                   |
| **Tools**    | `dotenv`              | Management of environment variables.                 |

---

## ⚙️ Folder Structure

The project follows a standard, scalable structure with clear separation of concerns:

```
backend/
├── controllers/ # API controllers (tasks, users, auth)
├── models/ # Sequelize models
├── routes/ # API routes
├── middleware/ # Authentication & role-based middleware
├── config/ # Database configuration
├── server.js # Express server entry point
├── package.json
└── .env # Environment variables

frontend/ # Optional, for testing API
├── src/
│ ├── api/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ ├── index.js
│ └── App.css
└── package.json

```

---

## 🔧 Local Setup Guide

Follow these steps to get the backend server running on your local machine.

### Prerequisites

- Node.js (LTS version)
- MySQL Server (locally installed)

### Steps

1.  **Navigate to the backend directory:**

    ```bash
    cd Primetrade/backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env` in the `backend/` folder and populate it with your configuration details (refer to the `.env.example` file):

    ```env
    # Database Configuration
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=your_mysql_password
    DB_NAME=primetrade_db

    # Application Configuration
    JWT_SECRET=a_very_secure_secret_key_change_me
    PORT=5000
    ```

4.  **Initialize the Database:**
    Use the Sequelize CLI to create the database and run migrations.

    ```bash
    # 1. Create the database (as specified in DB_NAME)
    npx sequelize db:create

    # 2. Run all database migrations (creates tables: Users, Tasks)
    npx sequelize db:migrate
    ```

5.  **Start the Server:**
    ```bash
    npm start
    ```
    The backend API will now be running at: **`http://localhost:5000/api`**.

---

## 📁 API Endpoints

All endpoints are prefixed with `/api`.

| Functionality     | Method   | Endpoint                | Access     | Description                                     |
| :---------------- | :------- | :---------------------- | :--------- | :---------------------------------------------- |
| **Documentation** | `GET`    | `/api-docs`             | Public     | Interactive Swagger UI for all endpoints.       |
| **Auth**          | `POST`   | `/api/v1/auth/register` | Public     | Create a new user account.                      |
| **Auth**          | `POST`   | `/api/v1/auth/login`    | Public     | Authenticate and receive a JWT.                 |
| **Tasks**         | `GET`    | `/api/v1/tasks`         | User/Admin | Retrieve all tasks (user-specific).             |
| **Tasks**         | `POST`   | `/api/v1/tasks`         | User/Admin | Create a new task.                              |
| **Tasks**         | `PUT`    | `/api/v1/tasks/:id`     | User/Admin | Update an existing task (e.g., mark completed). |
| **Tasks**         | `DELETE` | `/api/v1/tasks/:id`     | User/Admin | Delete a specific task.                         |
| **Users**         | `GET`    | `/api/v1/users`         | Admin Only | Get a list of all users.                        |
| **Users**         | `PUT`    | `/api/v1/users/:id`     | Admin Only | Update a user's details or role.                |
| **Users**         | `DELETE` | `/api/v1/users/:id`     | Admin Only | Delete a user account.                          |

---

## 🧪 API Testing Instructions (Postman/Swagger)

To thoroughly test the protected endpoints, you must first register and log in to obtain a **JWT**.

### Step 1: Register & Login

1.  **Register a User**

    - **Method:** `POST`
    - **URL:** `http://localhost:5000/api/auth/register`
    - **Body (JSON):** `{"username": "testuser", "email": "user@example.com", "password": "password123"}`
    - _Note: To test Admin routes, create an Admin user manually in the DB or via an Admin seed._

2.  **Login**
    - **Method:** `POST`
    - **URL:** `http://localhost:5000/api/v1/auth/login`
    - **Body (JSON):** `{"email": "user@example.com", "password": "password123"}`
    - **Response:** Save the `token` value from the response body.

### Step 2: Test Protected Routes

Use the saved `token` to authorize your requests:

1.  Go to the **Headers** tab in your testing tool (Postman/Swagger).
2.  Add a new header:
    - **Key:** `Authorization`
    - **Value:** `Bearer <PASTE_YOUR_JWT_TOKEN_HERE>`
3.  You can now access protected routes, such as:
    - **Method:** `GET`
    - **URL:** `http://localhost:5000/api/v1/tasks`
    - _This request should succeed and return the user's tasks._

---

## ⚡ Deployment Notes

The architecture is designed for scalability and production readiness:

- **Modularity**: The structure supports easy addition of new feature modules.
- **Containerization**: Ready for **Docker** deployment.
- **Optimization**: Can be enhanced with **Redis** caching for frequently accessed data (e.g., user profiles).
- **Monitoring**: Supports integration with logging and monitoring tools for production environments.

---

## 📦 License

This project is created exclusively for the **Primetrade Backend Internship Assignment** and is not intended for general distribution or commercial use.
