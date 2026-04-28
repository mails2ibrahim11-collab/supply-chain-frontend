# 🌐 AI + Blockchain Supply Chain Frontend

## 📌 Overview

This repository contains a **frontend application for a supply chain system powered by AI and Blockchain technologies**.

The application provides a **role-based interface** for different stakeholders to interact with the system, enabling seamless tracking, monitoring, and visualization of product movement across the supply chain.

It is built using **React** and focuses on intuitive design, modular architecture, and smooth user interaction.

---

## 🚀 Features

### 🔐 1. Authentication System

* Login interface with role-based access
* Separate dashboards for each user type
* Session handling using local storage

---

### 🏭 2. Producer Dashboard

* Create and manage product batches
* Input details such as:

  * Batch ID
  * Product name/description
  * Product weight
* Generate QR codes for each batch
* Interface ready for AI-based recommendations

---

### 🏪 3. Distributor Dashboard

* View available batches
* Update product status across supply stages
* Manage distribution flow

---

### 🛒 4. Consumer Interface

* Scan QR codes
* View detailed product traceability
* Displays:

  * Product origin
  * Batch details
  * Supply chain journey

---

### 🛠️ 5. Administrative Dashboard

* Monitor all batches
* Track system activity
* Oversee operations across the platform

---

### 🔍 6. Traceability System

* Dedicated trace view
* Displays complete lifecycle of a product:

  * Processing
  * Packaging
  * Shipping
  * Delivery

---

### 📱 7. QR Code Integration

* QR codes generated for each batch
* Encodes product and batch information
* Enables quick access to trace data

---

## 🏗️ Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* CSS
* React Router

---

## 📂 Project Structure

```
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── admin/
│   ├── consumer/
│   ├── producer/
│   ├── distributor/
│   ├── trace/
│   └── Login.jsx
├── services/
├── assets/
├── App.jsx
├── main.jsx
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/mails2ibrahim11-collab/supply-chain-frontend.git
cd supply-chain-frontend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run the Application

```bash
npm run dev
```

---

## 🔄 Workflow

1. User logs in based on role
2. Producer creates a batch and generates QR
3. Distributor updates product status
4. Consumer scans QR and views product journey
5. Admin monitors overall system

---

## 🔮 Future Improvements

* Integration with backend APIs
* Blockchain connectivity for real-time data
* Camera-based QR scanning
* Enhanced UI/UX
* Secure authentication system

---

## 👨‍💻 Author

**Mohammed Ibrahim Faheem**
Frontend Developer

---

## 📌 Note

This repository represents the **frontend layer** of a broader system integrating AI and Blockchain technologies.

---
