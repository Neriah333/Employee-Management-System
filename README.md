Employee Management System (EMS)A modern, full-stack CRUD application developed for the technical assessment. This project demonstrates a clean separation of concerns using a Spring Boot REST API and a reactive React frontend.🌟 Key FeaturesDynamic Data Management: Full Create, Read, and Delete operations for employee records.State-Driven UI: Automatic table refreshing via React state hooks upon successful form submission.Custom Exception Handling: Centralized backend error mapping that returns structured JSON to the frontend.Modern Styling: Responsive "Bento" layout utilizing Tailwind CSS v4 and PostCSS.🛠️ Technical StackBackendFramework: Spring Boot 3.xLanguage: Java 17+Data Access: Spring Data JPADatabase: MySQLUtilities: Lombok, Maven WrapperFrontendLibrary: React.js (Vite)Styling: Tailwind CSS v4 + PostCSSHTTP Client: Fetch API (Async/Await)📂 Project Directory StructurePlaintextassessment-project/
├── backend/                         # Spring Boot Application
│   ├── src/main/java/com/api/
│   │   ├── controller/              # REST Endpoints (EmployeeController)
│   │   ├── model/                   # JPA Entities (Employee)
│   │   ├── repository/              # Data Access Layer
│   │   └── exception/               # GlobalExceptionHandler
│   ├── src/main/resources/
│   │   └── application.properties   # DB Credentials & Hibernate Settings
│   └── mvnw                         # Maven Wrapper Script
├── frontend/                        # React Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmployeeForm.jsx     # Form Logic & POST integration
│   │   │   └── EmployeeList.jsx     # Data Table & DELETE integration
│   │   ├── App.jsx                  # Main Layout & State Coordination
│   │   └── index.css                # Tailwind v4 Directives
│   ├── tailwind.config.js           # Tailwind Content Scanning
│   ├── postcss.config.js            # CSS Transformation Logic
│   └── package.json                 # Dependencies (React, Vite, PostCSS)
└── README.md                        # Project Documentation
 Setup & Installation1. Database ConfigurationEnsure MySQL is running.Create the database:SQLCREATE DATABASE assessment_db;
Update backend/src/main/resources/application.properties with your MySQL username and password.2. Launch the BackendNavigate to the backend folder and run:PowerShell# Ensure JAVA_HOME is set to your JDK path
$env:JAVA_HOME = "YOUR_JDK_PATH_HERE"
./mvnw spring-boot:run
3. Launch the FrontendNavigate to the frontend folder and run:PowerShellnpm install
npm run dev
Access the application at http://localhost:5173.📝 API EndpointsMethodEndpointDescriptionGET/api/employeesRetrieve all employeesPOST/api/employeesCreate a new employeeDELETE/api/employees/{id}Remove an employee by ID
