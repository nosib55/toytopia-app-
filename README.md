# 🎉 ToyTopia – Full-Stack Toy Marketplace

A modern, responsive, and feature-rich toy marketplace built using  
**React, Node.js, Express, MongoDB, Firebase Authentication, and TailwindCSS**.

---

## 🔗 Live Demo

👉 **https://toy-topia-bd7f7.web.app/**

---



---

## 🎯 About the Project

**ToyTopia** is a full-stack e-commerce toy marketplace where users can browse toys, view details, apply discounts, purchase items, and manage their accounts.

It includes:
- Firebase Authentication  
- MongoDB backend  
- REST API  
- Responsive UI  
- Discount & offer system  
- Buy Now modal  
- Dark/Light mode  

---

## 🚀 Features

### 🖥️ Frontend Features
- Fully responsive for mobile, tablet & desktop
- Dynamic toy listing with grid view
- Product detail page with full info
- Buy Now modal with:
  - User email auto-filled from Firebase
  - Name & address fields
- Discount coupon system in "My Offer"
- Dark mode support
- Toast notifications
- Lottie animations for loading & error
- Custom hooks for data fetching

---

### 🛠️ Backend Features
- Node.js + Express REST API
- MongoDB database for Toys & Purchases
- Secure purchase storage
- GET + POST operations
- Environment variables protected
- CORS enabled

---

### 🔐 Authentication (Firebase)
- User Login & Signup
- Private routes
- Profile picture dropdown
- Logout button

---

## 🧰 Tech Stack

### Frontend
- React  
- React Router  
- TailwindCSS / DaisyUI  
- Axios  
- Firebase Auth  
- Lottie React  
- Toastify  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Dotenv  
- CORS  

---

## 📂 Folder Structure

### Frontend
```
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── context/
 ├── assets/
 ├── App.jsx
 └── main.jsx
```

### Backend
```
toy-topia-server/
 ├── server.js
 ├── .env
 ├── package.json
 └── node_modules/
```

---

## 🔑 Environment Variables

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=YOUR_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb+srv://yourUser:yourPass@cluster.mongodb.net/toytopia
```

---

## 🖥️ Backend Setup

```
cd toy-topia-server
npm install
npm install -g nodemon
nodemon server.js
```

Server runs at:  
👉 http://localhost:5000

---

## 🌐 Frontend Setup

```
cd toy-topia-client
npm install
npm run dev
```

Runs at:  
👉 http://localhost:5173

---

## 📡 API Endpoints

### Toys
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/toys` | Get all toys |
| GET | `/toys/:id` | Get a toy |
| POST | `/toys` | Add a toy |

### Purchases
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/purchase` | Save purchase |
| GET | `/mypurchases?email=user@gmail.com` | Get user purchases |

---



---


---

## ⭐ Need More?

If you want badges, GitHub stats, deployment guide (Firebase/Vercel/Render) or a more advanced README:

