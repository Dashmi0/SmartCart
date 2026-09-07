# 🛒 SmartCart

**SmartCart** is a full-stack e-commerce web application developed to provide users with a complete online shopping experience.

The application allows users to register and log in, browse products, search and filter products by category, add products to a shopping cart, increase or decrease product quantities, remove items, view the total cart price, place orders, and view their previous orders.

## 🚀 Features

* User registration and login
* Secure password hashing using bcrypt
* User authentication
* Browse available products
* Search products
* Filter products by category
* Add products to cart
* Increase or decrease product quantities
* Remove products from cart
* Calculate total cart price
* Place orders
* View previous orders
* REST API communication between frontend and backend
* Persistent data storage using MySQL

## 🏗️ Project Architecture

```text
                    SmartCart
                        │
          ┌─────────────┴─────────────┐
          │                           │
     Angular Frontend            FastAPI Backend
          │                           │
          │       HTTP/REST API       │
          └─────────────┬─────────────┘
                        │
                    SQLAlchemy
                        │
                        ▼
                     MySQL
```

The application follows a three-layer architecture:

**Frontend → Backend/API → Database**

The Angular frontend handles the user interface and user interactions. The FastAPI backend processes requests and implements the application's business logic. MySQL permanently stores application data.

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

### Development Tools

* Git
* GitHub
* Visual Studio Code

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
│   ├── auth.py
│   ├── crud.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   └── schemas.py
│
├── database/
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
│       │       ├── guards/
│       │       └── services/
│       ├── angular.json
│       ├── package.json
│       └── tsconfig.json
│
├── .gitignore
└── README.md
```

## 🔐 Authentication

SmartCart provides user registration and login functionality.

Passwords are not stored as plain text. **Passlib with bcrypt** is used to hash passwords before they are stored in the database and to verify passwords during login.

Authentication-related functionality is handled by the FastAPI backend.

## 🔄 How the Application Works

### 1. User Registration

A new user enters their registration details through the Angular frontend.

```text
Angular Registration Form
          ↓
       HTTP Request
          ↓
      FastAPI API
          ↓
   Password Hashing
          ↓
        MySQL
```

### 2. User Login

The user provides their credentials through the login page.

```text
Angular Login
     ↓
FastAPI Authentication API
     ↓
Verify Password
     ↓
Authentication Successful
```

### 3. Product Browsing

The Angular frontend requests product information from the FastAPI backend.

```text
Angular
   ↓
GET /products/
   ↓
FastAPI
   ↓
MySQL
   ↓
Product Data
   ↓
Angular Product Page
```

### 4. Cart Management

Users can add products to their cart, modify quantities, remove products, and view the total price.

The Angular frontend sends cart requests to the FastAPI backend, while the backend communicates with MySQL to store and retrieve cart information.

### 5. Order Placement

When the user places an order, the backend processes the order and stores the required order information in MySQL.

Users can later retrieve and view their previous orders.

## 🗄️ Database

MySQL is used as the persistent database for SmartCart.

The application stores information related to:

* Users
* Products
* Cart items
* Orders

**SQLAlchemy** is used as the Object-Relational Mapping (ORM) layer between the Python application and MySQL. This allows the backend to work with database records using Python objects and SQLAlchemy models.

**Pydantic** is used to validate and structure data received through the FastAPI APIs.

## 🔌 Backend API

The FastAPI backend provides REST APIs for different parts of the application.

| Module         | Purpose                                     |
| -------------- | ------------------------------------------- |
| Users          | Registration and user-related operations    |
| Products       | Product retrieval and management            |
| Cart           | Cart operations and quantity management     |
| Orders         | Order creation and previous-order retrieval |
| Authentication | Login and password verification             |

The backend server is run using **Uvicorn**.

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

* Python
* Node.js and npm
* Angular CLI
* MySQL
* Git

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment on Windows:

```powershell
.\venv\Scripts\activate
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

Configure your MySQL database and database connection settings.

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend will normally be available at:

```text
http://127.0.0.1:8000
```

FastAPI also provides interactive API documentation at:

```text
http://127.0.0.1:8000/docs
```

### Frontend Setup

Open another terminal and navigate to the Angular project:

```bash
cd frontend/smartcart-ui
```

Install the frontend dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

The frontend will normally be available at:

```text
http://localhost:4200
```

## 🔗 Frontend–Backend Communication

The Angular frontend communicates with the FastAPI backend through HTTP requests.

```text
User
 ↓
Angular UI
 ↓
Angular Services
 ↓
HTTP/REST API
 ↓
FastAPI
 ↓
SQLAlchemy
 ↓
MySQL
```

The backend sends the requested data back through the API, and Angular updates the user interface.

## 🎯 Learning Outcomes

Through SmartCart, the project demonstrates practical understanding of:

* Full-stack web development
* Angular component-based development
* TypeScript
* REST API development
* FastAPI
* Python backend development
* SQLAlchemy ORM
* MySQL database integration
* Authentication
* Password hashing
* API communication
* CRUD operations
* Frontend–backend integration
* Git and GitHub

## 🔮 Future Improvements

Possible future improvements include:

* Online payment integration
* Admin dashboard
* Product reviews and ratings
* Wishlist functionality
* Product recommendations
* Improved search functionality
* Order status tracking
* Email notifications
* Deployment to cloud platforms
* Automated testing
* Improved security and authorization

## 👩‍💻 Author

**Menni Dashmi Rama Tulasi**

CSE Student — National Institute of Technology Manipur

GitHub: [@Dashmi0](https://github.com/Dashmi0)
