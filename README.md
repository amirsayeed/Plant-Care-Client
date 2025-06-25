# 🌱 Plant Care

A full-stack, mobile-responsive web application designed to help users manage and monitor the care of their indoor and outdoor plants. Built with React, Tailwind CSS, Express, MongoDB, and Firebase.

## 🔗 Live Links

- 🌐 [Live Site](https://plant-care-tracker-6b11a.web.app/)
- 🛠️ [Server GitHub Repo](https://github.com/amirsayeed/Plant-Care-Server)

---

## ⚙️ Tech Stack

**Frontend:**

- ReactJS
- React Router
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- Firebase Hosting

**Backend:**

- ExpressJS
- MongoDB
- Vercel

**Packages & Tools:**

- sweetalert2
- react-toastify
- date-fns
- react-tooltip
- react-icons
- dotenv

---

## ✨ Core Features

- 🔐 Auth with email/password & Google (with validation)
- 🪴 Add, view, edit, and delete personal plants
- 📊 Sortable plant lists by next watering date
- 🎨 Light/Dark theme toggle
- ✅ Styled feedback (toasts/alerts), tooltips & spinners
- 📱 Fully responsive design
- ❌ Custom 404 and route protection

---

## 📄 Main Pages

- **Home**: Banner, featured plants, tips
- **All Plants**: Public plant list with sorting
- **Add/View/Update Plant**: Auth-only CRUD pages
- **My Plants**: User’s own plant records
- **404**: Custom not found page

---

## 🔐 Environment

All sensitive credentials are managed via `.env` files and excluded from the codebase.

---

## 🛠️ Local Development Setup

### 1. Clone both client and server repos:

```bash
git clone https://github.com/amirsayeed/Plant-Care-Client.git
git clone https://github.com/amirsayeed/Plant-Care-Server.git
```

### 2. Setup the server

```bash
cd Plant-Care-Server
npm install
```

Create a .env file in the server root with the following:

```bash
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
```

Then start the server using:

```bash
nodemon index.js
```

The server will run on: http://localhost:5000

### 3. Setup the Client:

```bash
cd ../Plant-Care-Client
npm install
```

Create a .env.local file in the root of the client directory:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then start the client:

```bash
npm run dev
```

The client will run at: http://localhost:5173
