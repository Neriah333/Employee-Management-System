Employee Management System (EMS)

A modern full-stack CRUD application built as part of a technical assessment. This project demonstrates clean architecture, separation of concerns, and seamless integration between a Spring Boot backend and a reactive React frontend.

 Key Features
Dynamic Data Management
Perform full Create, Read, and Delete operations for employee records.
State-Driven UI
Automatic table updates using React state management after form submissions.
Custom Exception Handling
Centralized backend error handling that returns structured JSON responses.
Modern UI Design
Responsive "Bento-style" layout built with Tailwind CSS v4.
 Tech Stack
Backend
Framework: Spring Boot 3.x
Language: Java 17+
Data Access: Spring Data JPA
Database: MySQL
Utilities: Lombok, Maven Wrapper
Frontend
Library: React (Vite)
Styling: Tailwind CSS v4 + PostCSS
HTTP Client: Fetch API (Async/Await)
 Project Structure
assessment-project/
├── backend/                                 # Spring Boot Application
│   ├── src/main/java/com/api/
│   │   ├── controller/                      # REST Controllers (EmployeeController)
│   │   ├── service/                         # Business Logic Layer (Service Interfaces & Implementations)
│   │   ├── model/                           # JPA Entities (Employee)
│   │   ├── repository/                      # Data Access Layer (Spring Data JPA Repositories)
│   │   └── exception/                       # Global Exception Handling
│   ├── src/main/resources/
│   │   └── application.properties           # Database Config & Hibernate Settings
│   └── mvnw                                 # Maven Wrapper
│
├── frontend/                                # React Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmployeeForm.jsx             # Form Handling & POST Requests
│   │   │   └── EmployeeList.jsx             # Data Table & DELETE Requests
│   │   ├── App.jsx                          # Main Layout & State Management
│   │   └── index.css                        # Tailwind CSS Directives
│   ├── tailwind.config.js                   # Tailwind Configuration
│   ├── postcss.config.js                    # PostCSS Configuration
│   └── package.json                         # Project Dependencies
│
└── README.md                                # Project Documentation
⚙️ Setup & Installation
1. Database Setup

Ensure MySQL is running, then create the database:

CREATE DATABASE assessment_db;

Update the database credentials in:

backend/src/main/resources/application.properties
2. Run the Backend

Navigate to the backend folder:

# Set your JDK path (Windows PowerShell)
$env:JAVA_HOME="YOUR_JDK_PATH_HERE"

# Run the application
./mvnw spring-boot:run
3. Run the Frontend

Navigate to the frontend folder:

npm install
npm run dev

Access the app at:

http://localhost:5173
 API Endpoints
Method	Endpoint	Description
GET	/api/employees	Retrieve all employees
POST	/api/employees	Create a new employee
DELETE	/api/employees/{id}	Delete an employee by ID
 Possible Improvements
Add Update (PUT/PATCH) functionality
Implement authentication & authorization (JWT)
Add pagination & search
Dockerize the application
Deploy backend (e.g., Render) and frontend (e.g., Vercel)
