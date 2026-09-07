# 🛒 SmartCart — Full-Stack E-Commerce Application

SmartCart is a **full-stack e-commerce web application** that provides users with a complete online shopping experience. Users can register and log in, browse and search products, filter products by category, manage their shopping cart, place orders, and view their previous orders.

The project demonstrates the integration of a **modern frontend, REST API backend, authentication system, and relational database**.

---

## 🚀 Project Highlights

* 🔐 User registration and authentication
* 🛍️ Product browsing, searching, and category filtering
* 🛒 Complete shopping cart management
* 📦 Order placement and order history
* 🔑 Secure password hashing using bcrypt
* 🔄 REST API communication between frontend and backend
* 🗄️ Persistent data storage using MySQL
* 🏗️ Full-stack architecture using Angular + FastAPI + MySQL

---

## ✨ Features

### 👤 User Management

* User registration
* User login
* Authentication
* Secure password hashing using bcrypt
* Protected frontend routes

### 🛍️ Product Management

* Browse available products
* Search products
* Filter products by category
* Display product information and images

### 🛒 Shopping Cart

* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products from cart
* Calculate total cart price

### 📦 Order Management

* Place orders
* Store order information
* View previous orders

---

## 🏗️ System Architecture

```text
                         SmartCart
                            │
             ┌──────────────┴──────────────┐
             │                             │
      Angular Frontend              FastAPI Backend
             │                             │
             │        HTTP / REST API      │
             └──────────────┬──────────────┘
                            │
                       SQLAlchemy
                            │
                            ▼
                         MySQL
```

The application follows a three-layer architecture:

**Frontend → Backend/API → Database**

* **Angular** handles the user interface and user interactions.
* **FastAPI** processes requests and implements backend logic.
* **SQLAlchemy** provides the ORM layer between Python and MySQL.
* **MySQL** stores application data persistently.

---

## 🛠️ Technologies Used

### Frontend

* Angular
* TypeScript
* HTML
* CSS

### Backend

* Python
* FastAPI
* Uvicorn
* SQLAlchemy
* Pydantic
* Passlib
* bcrypt

### Database

* MySQL

### Tools

* Git
* GitHub
* Visual Studio Code

---

## 📁 Project Structure

```text
SmartCart/
│
├── backend/
│   ├── images/
│   ├── routers/
│   │   ├── cart.py
│   │   ├── orders.py
│   │   ├── products.py
│   │   └── users.py
│   │
│   ├── auth.py
│   ├── crud.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   └── schemas.py
│
├── frontend/
│   └── smartcart-ui/
│       ├── public/
│       ├── src/
│       │   └── app/
│       │       ├── components/
│       │       │   ├── cart/
│       │       │   ├── home/
│       │       │   ├── login/
│       │       │   ├── navbar/
│       │       │   ├── orders/
│       │       │   ├── products/
│       │       │   └── register/
│       │       │
│       │       ├── guards/
│       │       └── services/
│       │
│       ├── angular.json
│       ├── package.json
│       └── tsconfig.json
│
├── .gitignore
└── README.md
```

---

## 🔐 Authentication & Security

SmartCart provides user registration and login functionality.

Passwords are **not stored as plain text**. Passlib with bcrypt is used to hash passwords before they are stored in the database and to verify passwords during login.

Authentication functionality is handled by the FastAPI backend, while Angular route guards are used to protect frontend routes.

> **Security Note:** Database credentials and other sensitive information should be kept out of the GitHub repository.

---

## 🔄 How SmartCart Works

### 1. User Registration

```text
Angular Registration Form
          ↓
       HTTP Request
          ↓
      FastAPI API
          ↓
   Validate User Data
          ↓
    Hash Password
          ↓
        MySQL
```

### 2. User Login

```text
Angular Login
      ↓
FastAPI Authentication API
      ↓
Verify Credentials
      ↓
Authentication Successful
```

### 3. Product Browsing

```text
Angular
   ↓
HTTP Request
   ↓
FastAPI
   ↓
SQLAlchemy
   ↓
MySQL
   ↓
Product Data
   ↓
Angular Product Page
```

### 4. Cart Management

Users can add products to their cart, modify quantities, remove products, and view the total price.

```text
Angular Cart
     ↓
FastAPI Cart API
     ↓
SQLAlchemy
     ↓
MySQL
     ↓
Updated Cart
```

### 5. Order Placement

When a user places an order:

```text
Shopping Cart
      ↓
Place Order
      ↓
FastAPI Orders API
      ↓
SQLAlchemy
      ↓
MySQL
      ↓
Order Stored
      ↓
Order History
```

---

## 🗄️ Database

SmartCart uses **MySQL** as its relational database.

The application stores information related to:

* Users
* Products
* Cart items
* Orders

**SQLAlchemy** is used as the Object-Relational Mapping (ORM) layer between Python and MySQL.

**Pydantic** is used to validate and structure data exchanged through the FastAPI APIs.

The actual MySQL database is maintained separately from the GitHub source code.

---

## 🔌 Backend API

The FastAPI backend is organized into separate routers for different application functionalities.

| Module         | Purpose                                  |
| -------------- | ---------------------------------------- |
| Users          | Registration and user-related operations |
| Products       | Product retrieval and management         |
| Cart           | Cart operations and quantity management  |
| Orders         | Order creation and order history         |
| Authentication | Login and password verification          |

FastAPI provides interactive API documentation through Swagger UI:

```text
http://127.0.0.1:8000/docs
```

---

## ⚙️ Installation & Setup

### Prerequisites

Install the following:

* Python 3.x
* Node.js
* npm
* Angular CLI
* MySQL
* Git

---

### Backend Setup

Navigate to the backend:

```powershell
cd backend
```

Create a virtual environment:

```powershell
python -m venv venv
```

Activate it on Windows:

```powershell
.\venv\Scripts\activate
```

Install the backend dependencies:

```powershell
pip install fastapi uvicorn sqlalchemy pymysql python-jose passlib[bcrypt] python-multipart email-validator
```

Configure your MySQL database connection in `database.py`.

Start the FastAPI server:

```powershell
uvicorn main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

---

### Frontend Setup

Open another terminal and navigate to:

```powershell
cd frontend/smartcart-ui
```

Install dependencies:

```powershell
npm install
```

Start the Angular development server:

```powershell
ng serve
```

Frontend:

```text
http://localhost:4200
```

---

## 🔗 Frontend–Backend Communication

The Angular frontend communicates with the FastAPI backend through HTTP/REST APIs.

```text
User
 ↓
Angular UI
 ↓
Angular Services
 ↓
HTTP / REST API
 ↓
FastAPI
 ↓
SQLAlchemy
 ↓
MySQL
```

The backend returns the requested data through the API, and Angular updates the user interface accordingly.

---

## 📸 Screenshots

Screenshots of the application can be added here.

### 🏠 Home Page

*Add screenshot here*

### 🛍️ Products Page

*Add screenshot here*

### 🛒 Shopping Cart

*Add screenshot here*

### 📦 Orders Page

*Add screenshot here*

---

## 🎯 Learning Outcomes

This project demonstrates practical experience with:

* Full-stack web development
* Angular component-based development
* TypeScript
* Python backend development
* FastAPI REST API development
* REST API integration
* SQLAlchemy ORM
* MySQL database integration
* CRUD operations
* User authentication
* Password hashing
* Pydantic validation
* Frontend–backend integration
* Git and GitHub

---

## 🔮 Future Improvements

* 💳 Online payment integration
* 👨‍💼 Admin dashboard
* ⭐ Product reviews and ratings
* ❤️ Wishlist functionality
* 🤖 Personalized product recommendations
* 🔎 Advanced search
* 📦 Order status tracking
* 📧 Email notifications
* ☁️ Cloud deployment
* 🧪 Automated testing
* 🔒 Improved authorization and security

---

## 👩‍💻 Author

**Menni Dashmi Rama Tulasi**

CSE Student — National Institute of Technology Manipur

GitHub: [@Dashmi0](https://github.com/Dashmi0)

---

⭐ If you find this project interesting, consider giving it a star!
