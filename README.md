# 📝 Blblogs  (```work in progress```)

A full-stack blogging platform built with **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and Lexical rich-text editor. Users can sign up, log in, write new blogs, edit their profiles, or delete their accounts.



## 🚀 Features Overview

-  User Authentication (Signup/Login with JWT)
-  Dashboard with:
  - My Profile (view/edit/delete account)
  - New Blog creation (Rich Text Editor)
  - View and Manage Your Blogs (Edit/Delete)
  - Logout functionality
-  Lexical Editor Integration for rich blogging experience
- ⚙ Secure Backend with protected routes



## 🧭 User Journey

1. **Signup/Login**
   
   - Users sign up with name, email, and password.
   - On successful login, they are redirected to their **Dashboard**.

2. **Dashboard Features**
   
   - `My Profile`: View or update user info (name/email), or delete the account permanently.
   - `New Blog`: Access the Lexical Editor to write blogs with rich formatting.
   - `My Blogs`: View, edit, or delete blogs authored by the user.
   - `Logout`: Securely log out of the session.



## 🛠️ How to Run the Project Locally

### 1. Clone the Repository

> bash  (for cloning)

    git clone https://github.com/snowXshade/BLblogs.git
    cd BLblogs


> bash   (for frontend)

     cd frontend
     npm i
     npm run dev

> bash    (for backend)

    cd backend
    npm init -y
    npm run dev

### create .env file for proper functioning

> .env

    JWT_SECRET = "YOUR_JWT_SECRET"
    MONGO = "YOUR_MONGODB_ATLAS/LOCALHOST_URL"
    PORT = "3000"  

> Now you are good to go...
