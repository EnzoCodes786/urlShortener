# 🔗 URL Shortener — Full Stack Application

A full-stack **URL Shortening Application** built with **React, Node.js, Express.js, MySQL, and Redis**.

The application converts long URLs into compact and shareable short links. When a user visits a generated short URL, the backend resolves the corresponding original URL and redirects the user to the destination.

The project demonstrates the complete flow of a modern full-stack application — from a React-based user interface to REST API communication, database persistence, caching, and server-side redirection.

---

## ✨ Features

* 🔗 Convert long URLs into short URLs
* ⚡ Fast URL resolution and redirection
* 🗄️ Persistent URL storage using MySQL
* 🚀 Redis integration for caching
* ⚛️ Interactive frontend built with React
* 🔄 REST API communication between frontend and backend
* 📡 Axios-based HTTP requests
* 🌐 CORS-enabled backend
* 🎨 Custom responsive frontend styling
* 🧩 Modular backend architecture

---

# 🛠️ Tech Stack

## Frontend

| Technology     | Purpose                                |
| -------------- | -------------------------------------- |
| **React 19**   | Building the user interface            |
| **Vite**       | Frontend development and build tooling |
| **Axios**      | Communication with backend APIs        |
| **CSS**        | Application styling                    |
| **JavaScript** | Frontend application logic             |

## Backend

| Technology       | Purpose                                     |
| ---------------- | ------------------------------------------- |
| **Node.js**      | JavaScript runtime                          |
| **Express.js 5** | Backend REST API                            |
| **MySQL**        | Persistent URL storage                      |
| **mysql2**       | MySQL connectivity                          |
| **Redis**        | Caching layer                               |
| **CORS**         | Cross-origin frontend/backend communication |
| **dotenv**       | Environment variable management             |
| **Nodemon**      | Development server                          |

---

# 🏗️ Architecture

The application follows a client-server architecture:

```text
┌───────────────────────┐
│     React Frontend    │
│     Vite + Axios      │
└───────────┬───────────┘
            │
            │ HTTP Request
            ▼
┌───────────────────────┐
│    Express Backend    │
│       REST API        │
└───────────┬───────────┘
            │
       ┌────┴────┐
       ▼         ▼
┌───────────┐ ┌───────────┐
│   Redis   │ │   MySQL   │
│   Cache   │ │ Database  │
└───────────┘ └───────────┘
```

### URL Shortening Flow

```text
Long URL
   │
   ▼
React Frontend
   │
   │ POST Request
   ▼
Express API
   │
   ▼
Generate / Store Short URL
   │
   ├──────────► MySQL
   │
   └──────────► Redis
   │
   ▼
Return Short URL
   │
   ▼
React Frontend
```

### URL Redirection Flow

```text
User Opens Short URL
        │
        ▼
   Express Server
        │
        ▼
  Resolve Short Code
        │
        ▼
   Original URL
        │
        ▼
HTTP Redirect → Destination
```

---

# 📁 Project Structure

```text
urlShortener/
│
├── src/
│   └── # Backend source code
│
├── url-shortener/
│   │
│   ├── src/
│   │   └── # React frontend source code
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── LICENSE
└── README.md
```

The project keeps the **frontend and backend separated**, allowing both parts of the application to be developed and maintained independently.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MySQL Server
* Redis Server
* Git

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/EnzoCodes786/urlShortener.git
cd urlShortener
```

---

# ⚙️ Backend Setup

## 2️⃣ Install Backend Dependencies

From the root directory:

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file inside the project root.

Example:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name

REDIS_HOST=localhost
REDIS_PORT=6379
```

> Environment variable names may differ depending on the current project configuration. Check the database and Redis configuration files before running the application.

Never commit `.env` files containing credentials or secrets to version control.

---

## 4️⃣ Start MySQL

Make sure your MySQL server is running and that the database required by the application has been created.

Update the `.env` file with your MySQL credentials.

---

## 5️⃣ Start Redis

Make sure a Redis server is available before starting the backend if Redis caching is enabled in the application.

A local Redis instance can be used during development.

---

## 6️⃣ Start the Backend

```bash
npm run dev
```

The backend server runs at:

```text
http://localhost:5000
```

---

# ⚛️ Frontend Setup

Open another terminal and navigate to the React application:

```bash
cd url-shortener
```

Install frontend dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

Open that URL in your browser to access the application.

---

# 🔄 Frontend ↔ Backend Communication

The React frontend communicates with the Express backend using **Axios**.

The general request flow is:

```text
React Component
      │
      ▼
    Axios
      │
      ▼
Express REST API
      │
      ▼
Business Logic
      │
   ┌──┴───┐
   ▼      ▼
 Redis   MySQL
      │
      ▼
JSON Response
      │
      ▼
React UI
```

This architecture keeps the user interface independent from backend business logic and database operations.

---

# 🗄️ Database

The project uses **MySQL** as its persistent data storage.

URL mappings can be stored in a structure conceptually similar to:

```text
┌────┬──────────────────────────────┬────────────┐
│ ID │ Original URL                 │ Short Code │
├────┼──────────────────────────────┼────────────┤
│ 1  │ https://example.com/...      │ abc123     │
│ 2  │ https://github.com/...       │ xYz789     │
└────┴──────────────────────────────┴────────────┘
```

MySQL ensures that URL mappings remain available beyond individual server requests.

---

# ⚡ Redis Caching

Redis is included as a caching layer in the backend architecture.

For URL shorteners, caching frequently accessed mappings can reduce unnecessary database operations.

```text
Request Short URL
       │
       ▼
Check Redis Cache
       │
   ┌───┴────┐
   │        │
  HIT      MISS
   │        │
   ▼        ▼
Redirect   MySQL
            │
            ▼
        URL Mapping
            │
            ▼
       Update Cache
            │
            ▼
         Redirect
```

This architecture demonstrates how caching can be introduced alongside persistent database storage.

---

# 📦 Major Backend Dependencies

```text
express
mysql2
redis
cors
axios
dotenv
@dotenvx/dotenvx
nodemon
```

---

# 📦 Frontend Dependencies

The React client primarily uses:

```text
react
react-dom
axios
vite
```

Development tooling also includes the Vite React plugin and Oxlint.

---

# 💡 What This Project Demonstrates

This project demonstrates several important full-stack development concepts:

* Building REST APIs using Express
* Building interactive interfaces using React
* Connecting React applications with backend APIs
* Persistent storage with relational databases
* MySQL integration with Node.js
* Redis caching
* URL redirection
* Client-server architecture
* Asynchronous HTTP communication using Axios
* Environment-based configuration
* CORS handling
* Modular application structure

---

# 🔒 Security & Production Considerations

For a production deployment, additional measures should be considered:

* URL validation
* Rate limiting
* HTTPS
* Secure environment variable management
* Request validation
* Protection against malicious URLs
* Database connection pooling
* Redis connection management
* Logging and monitoring

---

# 🗺️ Future Improvements

Potential improvements include:

* 📊 Click analytics
* 👤 User authentication
* 🔐 Private links
* ✏️ Custom URL aliases
* ⏳ Expiring URLs
* 📱 Improved mobile responsiveness
* 📋 Copy-to-clipboard functionality
* 📈 Analytics dashboard
* 🛡️ API rate limiting
* 🐳 Docker support
* ☁️ Cloud deployment
* 🌐 Custom domain support
* 📱 QR code generation

---

# 🎯 Project Objective

The goal of this project is to understand and implement the architecture behind a real-world URL shortening service.

Although URL shortening appears simple from a user's perspective, it involves several backend and full-stack concepts:

**Long URL → API Request → Short Code → Database Storage → Cache → Short URL → Redirect**

By combining **React, Express, MySQL, and Redis**, this project demonstrates how frontend interfaces, REST APIs, persistent databases, and caching systems can work together in a complete web application.

---

# 👨‍💻 Author

**Aryan Qayum**

Computer Science Student | Full Stack & Backend Developer

GitHub: **@EnzoCodes786**

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

<p align="center">
  Built with ⚛️ React, 🟢 Node.js, Express, MySQL & Redis
</p>
