# Me-API Playground (Track A)

A personal backend API and frontend dashboard that hosts my professional profile, skills, and projects. Built as a "Me-API" to demonstrate backend architecture, database modeling, and API consumption.

## 🚀 Live Demo
- **Frontend (Dashboard):** https://me-api-playground-orpin.vercel.app/
- **Backend (API):** https://me-api-playground-mucp.onrender.com
- **Public Repository:** https://github.com/abhinavvv-chauhan/me-api-playground

## 📄 Resume
https://drive.google.com/file/d/17hlZpBgm43-OeIuacCABn5_c3_HUPsiF/view?usp=drive_link

---

## 🛠 Tech Stack
- **Frontend:** React (Vite), Pure CSS (Custom Monochrome Dark Theme), Axios.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB Atlas (Cloud).
- **Deployment:** Vercel (Frontend), Render (Backend).

## 📂 Architecture
The project follows a **Monorepo** structure separating concerns between the client and server.

```
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
    
````

🔌 API Endpoints
The backend exposes a RESTful API to manage and retrieve profile data.

Method	Endpoint	Description	Query Params
GET	/health	Server liveness check	N/A
GET	/api/profile	Returns full user profile	N/A
GET	/api/projects	List of projects	?skill=react (Filters by tech)
GET	/api/search	Full-text search	?q=query (Matches title/desc)



🗄️ Database Schema
The data is modeled using MongoDB with a strictly defined Schema (User.js).

User: Stores name, email, education, skills (Array), and nested objects for projects and work.

Project: Nested schema containing title, description, and links (GitHub/Demo).

⚙️ Setup & Installation
To run this project locally:

  1.Clone the repository-
    git clone https://github.com/abhinavvv-chauhan/me-api-playground
    cd me-api-playground
    
  2.Backend Setup-
    cd backend
    npm install

  3.Frontend Setup
    cd ../frontend
    npm install
    npm run dev


📝 Remarks & Trade-offs
1.Search Logic: The search implementation is strict; it matches substrings within project titles and descriptions. It does not use fuzzy matching to keep the dependency list light.

2.Security: The API is currently public (read-only) for demonstration purposes. In a production environment, I would implement JWT authentication for write operations.

3.Styling: I chose standard CSS variables over a framework like Tailwind to demonstrate core CSS understanding and keep build times fast.
 
