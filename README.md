# CRUD Project — React + REST API

A demo **CRUD** application built with **React**, created to showcase building a custom **REST API** and consuming it from the frontend.

The app manages a company car fleet and supports:

- browsing the vehicle list,
- adding new records,
- editing data,
- deleting vehicles,
- search,
- filtering results.

---

## Tech Stack

### Backend (API)

- Node.js
- Express
- CORS
- JSON file storage

### Frontend

- React
- Vite
- React Router
- Bootstrap

---

## Project Structure

```text
projekt-crud/
│
├── API/                                 # Backend — REST API
│   ├── server.js                        # Express server with CRUD endpoints
│   ├── data/                            # JSON data files
│   │   ├── variant-01.json
│   │   ├── variant-02.json
│   │   ├── ...
│   │   └── variant-11.json              # Variant used by the frontend
│   ├── package.json
│   └── package-lock.json
│
└── projekt-crud/                        # Frontend — React app
    ├── public/                          # Static assets
    │   ├── favicon.svg                  # Browser tab icon
    │   └── icons.svg
    │
    ├── src/                             # Application source code
    │   ├── main.jsx                     # Entry point — mounts React + Router + Bootstrap
    │   ├── App.jsx                      # Root component — navigation and routing
    │   ├── App.css                      # App component styles
    │   ├── index.css                    # Global styles
    │   │
    │   ├── components/                  # React components
    │   │   ├── CarsPage.jsx             # Car list — GET, POST, PUT, DELETE
    │   │   ├── CarAddForm.jsx           # Form for adding a new vehicle
    │   │   ├── CarDetailPage.jsx        # Vehicle details — GET by id
    │   │   └── SearchBar.jsx            # Search and availability filter
    │   │
    │   └── assets/                      # Vite bundle assets
    │       ├── react.svg
    │       └── vite.svg
    │
    ├── index.html                       # HTML template — Vite entry point
    ├── vite.config.js                   # Vite bundler config
    ├── eslint.config.js                 # ESLint config
    ├── package.json                     # npm dependencies and scripts
    ├── package-lock.json
    └── .gitignore                       # Git ignore rules (e.g. node_modules)
```

---

## Getting Started

The project consists of two parts that must be run separately.

### 1. Backend (API)

Open a terminal and go to the `API` folder:

```bash
cd API
npm install
node server.js
```

The API server will start at:

```text
http://localhost:3001
```

---

### 2. Frontend (React)

In a second terminal, go to the React app folder:

```bash
cd projekt-crud
npm install
npm run dev
```

The app will be available at the URL shown in the terminal (default):

```text
http://localhost:5173
```

> **Note:** Start the API first, then the frontend. The React app communicates with the backend at `http://localhost:3001`.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/:variant/items` | Fetch all items |
| GET | `/api/:variant/items/:id` | Fetch a single item |
| POST | `/api/:variant/items` | Create a new item |
| PUT | `/api/:variant/items/:id` | Update an item |
| DELETE | `/api/:variant/items/:id` | Delete an item |

The frontend uses variant:

```text
/api/11/items
```

---

## Features

- Display a list of cars
- Add new vehicles
- Edit existing records
- Delete vehicles
- View vehicle details
- Search by brand
- Filter available vehicles

---

## Project Goals

This project demonstrates:

- building a custom REST API with Node.js and Express,
- handling HTTP requests (GET, POST, PUT, DELETE),
- frontend ↔ backend communication,
- working with React Router,
- managing React component state,
- building a complete CRUD application.
