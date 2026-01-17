# 🚀 Me-API Playground (Track A)

A personal backend API and frontend dashboard that hosts my professional profile, skills, and projects. Built as a **"Me-API"** to demonstrate backend architecture, database modeling, and API consumption.

---

## 🌐 Live Demo

- **Frontend (Dashboard):** https://me-api-playground-orpin.vercel.app/ 
- **Backend (API):** https://me-api-playground-mucp.onrender.com/health  
- **Public Repository:** https://github.com/abhinavvv-chauhan/me-api-playground

---

## 📄 Resume
https://drive.google.com/file/d/17hlZpBgm43-OeIuacCABn5_c3_HUPsiF/view?usp=drive_link

---

## 🛠 Tech Stack

**Frontend**
- React (Vite)  
- Pure CSS (Custom Monochrome Dark Theme)  
- Axios  

**Backend**
- Node.js  
- Express.js  

**Database**
- MongoDB Atlas (Cloud)

**Deployment**
- Vercel (Frontend)  
- Render (Backend)  

---

## 📂 Architecture

The project follows a **Monorepo** structure separating concerns between the client and server.

```text
/
├── backend/
│   ├── config/         # Database connection logic
│   ├── controllers/    # Request handlers (Business logic)
│   ├── models/         # Mongoose Schemas (Data Layer)
│   ├── routes/         # API Route definitions
│   └── server.js       # App entry point
└── frontend/
    ├── src/
    │   ├── App.jsx     # Main UI Component
    │   └── App.css     # CSS Variables & Styling
```

---

## 🔌 API Endpoints

The backend exposes a RESTful API to manage and retrieve profile data.

| Method | Endpoint         | Description                       | Query Params                       |
|--------|------------------|-----------------------------------|-------------------------------------|
| GET    | `/health`        | Server liveness check             | N/A                                 |
| GET    | `/api/profile`   | Returns full user profile         | N/A                                 |
| GET    | `/api/projects`  | List of projects                  | `?skill=react` (Filter by tech)     |
| GET    | `/api/search`    | Full-text search                  | `?q=query` (Matches title/desc)     |

---

## 🗄️ Database Schema

The data is modeled using MongoDB with a strictly defined schema.

### User Schema
Stores:
- Name  
- Email  
- Education  
- Skills (Array)  
- Nested objects for projects and work  

### Project Schema (Nested)
Contains:
- Title  
- Description  
- Links (GitHub / Demo)

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally.

---

### 📥 Clone the Repository

```bash
git clone [PASTE YOUR GITHUB REPO LINK HERE]
cd me-api-playground
```

---

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
MONGO_URI=your_connection_string
```

Start the backend server:

```bash
npm run dev
```

---

### 🎨 Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## ✅ Features

- RESTful API architecture  
- Modular backend structure  
- MongoDB schema modeling  
- Frontend dashboard consuming API  
- Full-text search functionality  
- Filterable project list  
- Production-ready deployment setup  
