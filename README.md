# 🏥 MedGrid – Healthcare Management System

**MedGrid** is an ongoing healthcare management web application designed to simplify healthcare services by connecting patients, doctors, and healthcare administrators through a centralized platform.

> 🚧 **Project Status: In Development**
>
> This project is actively being developed. New features, improvements, and bug fixes are being added regularly.

## 📌 Project Overview

MedGrid aims to provide a centralized platform for managing healthcare-related activities, including user registration, doctor information, appointments, and patient services.

The project follows a separate frontend and backend architecture.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- Vite

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs
- Maven

### Database
- Oracle Database 10g

### Development Tools
- Visual Studio Code
- IntelliJ IDEA
- Git
- GitHub
- Postman
- SQL Developer

## 📂 Project Structure

```text
MedGrid-Project/
│
├── Frontend/
│   └── medgrid-react-vite/
│       └── medgrid-react/
│           ├── public/
│           ├── src/
│           │   ├── components/
│           │   ├── service/
│           │   ├── styles/
│           │   ├── App.jsx
│           │   └── main.jsx
│           ├── package.json
│           └── README.md
│
├── Backend/
│   └── medgridUser/
│       └── medgridUser/
│           ├── src/
│           └── pom.xml
│
└── README.md
```

## ⚙️ Current Development Progress

| Module | Status |
|---|---|
| React frontend setup | In Progress |
| Frontend components | In Progress |
| User registration UI | In Progress |
| Spring Boot backend setup | In Progress |
| REST API integration | In Progress |
| Oracle database connection | In Progress |
| User registration API | Under Development |
| Login and authentication | Planned |
| Doctor management | Planned |
| Appointment management | Planned |
| Admin dashboard | Planned |

*The status of each module will be updated as development progresses.*

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Aniruddhask7/Medgrid-Project.git
```

```bash
cd MedGrid-Project
```

### 2. Run the Frontend

```bash
cd Frontend/medgrid-react-vite/medgrid-react
npm install
npm run dev
```

Frontend development server:

```text
http://localhost:5173
```

### 3. Run the Backend

1. Open IntelliJ IDEA.
2. Select **Open Project**.
3. Open the backend folder containing `pom.xml`.
4. Allow Maven dependencies to load.
5. Configure the Oracle database connection.
6. Run the Spring Boot application.

Backend API base URL (current local development configuration):

```text
http://localhost:8081
```

## 🔄 Development Update Log

This section will be updated regularly to track daily development activities.

| Date | Development Activity | Status |
|---|---|---|
| 03 November 2026 | Organized frontend and backend into a single GitHub repository | In Progress |
| 03 November 2026 | Worked on React frontend and Spring Boot integration | In Progress |
| Upcoming | Improve registration and API integration | Planned |

### Daily Update Template

Add a new entry whenever you make project changes:

```text
Date:
Module:
Changes Made:
New Features:
Bugs Fixed:
Next Steps:
```

## 🎯 Planned Features

- Patient registration and login
- Doctor profiles and management
- Appointment booking and scheduling
- Patient medical records
- Admin dashboard
- Secure authentication and authorization
- Healthcare service management

## 👨‍💻 Development Approach

MedGrid is being developed incrementally.

The frontend and backend are maintained in separate folders within one GitHub repository. This allows independent development and testing while keeping the complete project organized in one place.

## 📌 Current Note

This is an academic and portfolio development project. The application is not yet complete. Features and documentation will continue to evolve as development progresses.

## 📄 License

This project is currently intended for educational and development purposes. A formal license may be added later.
