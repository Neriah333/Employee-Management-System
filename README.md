Employee Management System (EMS)

A full-stack CRUD application built with Spring Boot and React.
This project demonstrates clean architecture, RESTful API design, and a responsive frontend.

 Features
Create, view, and delete employee records
Real-time UI updates using React state
Structured error handling on the backend
Responsive UI with Tailwind CSS
🛠 Tech Stack

Backend

Spring Boot
Java 17+
Spring Data JPA
MySQL

Frontend

React (Vite)
Tailwind CSS v4
PostCSS
Fetch API
 Project Structure
assessment-project/

backend/
  src/main/java/com/api/
    controller/        # Handles HTTP requests
    service/           # Business logic
    model/             # JPA entities
    repository/        # Database access
    exception/         # Error handling

  src/main/resources/
    application.properties

  mvnw

frontend/
  src/
    components/
      EmployeeForm.jsx
      EmployeeList.jsx
    App.jsx
    index.css

  tailwind.config.js
  postcss.config.js
  package.json

README.md
⚙️ Setup
1. Database
CREATE DATABASE assessment_db;

Update credentials in:

backend/src/main/resources/application.properties
2. Backend
cd backend
./mvnw spring-boot:run

Runs on:
http://localhost:8080

3. Frontend
cd frontend
npm install
npm run dev

Runs on:
http://localhost:5173

🔗 API
Method	Endpoint	Description
GET	/api/employees	Get all employees
POST	/api/employees	Create employee
DELETE	/api/employees/{id}	Delete employee

 Improvements
Add update functionality (PUT/PATCH)
Add authentication (JWT)
Implement search & pagination
Deploy (Render / Vercel)

👤 Author

Neriah Nn
