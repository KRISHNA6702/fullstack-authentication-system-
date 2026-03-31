# 🚀 Node.js Authentication App

A backend-focused authentication system built using **Node.js, Express, MongoDB**, and **JWT-based authentication**.
This project demonstrates secure user registration, login, and session handling using modern JavaScript (ES Modules).

---

## ✨ Features

* 🔐 Secure User Registration (Password Hashing with bcrypt)
* 🔑 Login System with Password Verification
* 🍪 Authentication using JWT stored in cookies
* 👤 User Data Storage with MongoDB
* ⚡ Server-side Rendering using EJS
* 🚪 Logout functionality (token clearing)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js (ES Modules)
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Tokens (JWT)
* **Security:** bcrypt (password hashing), cookie-based auth
* **Templating Engine:** EJS

---

## 📂 Project Structure

```
/models        → User schema (MongoDB)
/views         → EJS templates (index, login)
/public        → Static assets
app.js         → Main server file
```

---

## ⚙️ How It Works

### 🔐 User Registration

* User submits form (`/create`)
* Password is hashed using bcrypt
* User is stored in database
* JWT token is generated and stored in cookies

---

### 🔑 Login

* User submits email & password
* Password is compared using bcrypt
* On success → JWT token issued
* On failure → Error response

---

### 🚪 Logout

* Clears authentication token from cookies
* Redirects to homepage

---

---

## 📌 Key Learning Outcomes

* Implementing authentication from scratch
* Understanding password hashing & security
* Working with JWT tokens and cookies
* Structuring an Express application using ES Modules
* Handling async operations in Node.js

---

## ⚠️ Current Limitations

* ❌ No input validation
* ❌ No error handling middleware
* ❌ JWT secret is hardcoded
* ❌ Uses `find()` instead of `findOne()`
* ❌ No protected routes yet

---

## 🚀 Future Improvements

* 🔒 Add protected routes (middleware auth)
* 📧 Email validation & duplicate checks
* ⚙️ Move secrets to `.env`
* 🧱 Better error handling
* 🎨 Upgrade frontend (React / Next.js)

---

## 👨‍💻 Author

**Krishna Batra**

---

⭐ If you found this project useful, consider giving it a star!
