# 🔒 Password Strength Checker (SaaS-Style)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" />
  <img src="https://img.shields.io/badge/Frontend-HTML%2CJS-blue" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-green" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
  <img src="https://img.shields.io/badge/Docker-Ready-orange" />
</p>

A professional, modern, SaaS-grade **Password Strength Checker** built with **FastAPI (Python)** backend, and a clean **HTML/JS frontend**, fully containerized with **Docker** for deployment.

This project is designed for beginners entering cybersecurity who want a real, deployable, portfolio-ready project that looks professional and showcases full‑stack skills.

---

## 🚀 Features

* 🔐 **Real-time password strength evaluation** using entropy and dictionary checks
* 🎨 **Modern SaaS UI** with clean design
* ⚡ **Full-stack**: HTML/JS frontend + FastAPI backend
* 🧪 Strength scoring with verdict labels
* 📡 API-based architecture (frontend calls backend)
* 📱 Fully responsive
* ☁️ Ready to deploy with **Docker**, **Vercel**, or **Render**

---

## 🛠️ Tech Stack

### **Frontend**

* HTML / CSS / JavaScript
* Responsive design

### **Backend**

* Python 3.10+
* FastAPI
* Uvicorn
* Dictionary & entropy password checks

### **Deployment**

* Docker & Docker Compose
* Optional: Vercel (frontend) / Render (backend)

---

## 📁 Project Structure

```
password-strength-checker/
│
├── backend/
│   ├── main.py
│   ├── password_strength.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## ⚙️ Installation & Setup

### **1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/password-strength-checker.git
cd password-strength-checker
```

### **2. Run with Docker**

```bash
docker compose up --build
```

Services:

| Service     | URL                                            |
| ----------- | ---------------------------------------------- |
| Frontend    | [http://localhost:8080](http://localhost:8080) |
| Backend API | [http://localhost:8000](http://localhost:8000) |

Stop containers:

```bash
docker compose down
```

---

## 🌐 Backend API Endpoint

### **POST /check-password**

```
http://localhost:8000/check-password
```

#### Request body:

```json
{
  "password": "yourpassword"
}
```

#### Response:

```json
{
  "strength": "Strong",
  "entropy_bits": 57.2,
  "score": 4,
  "suggestions": ["Add special characters."]
}
```

FastAPI automatic docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🎨 Frontend

Open in browser:

```
http://localhost:8080
```

Interactive UI to test passwords in real-time.

---

## 🚀 Build for Production

### **Frontend**

* Already served by Docker/Nginx
* Optional deployment: Vercel / Netlify

### **Backend**

* Already production-ready in Docker
* Optional deployment: Render / Railway

---

## 🖼️ Screenshots

*(Add UI screenshots here)*

---

## 📚 What You Learn

✔ Full-stack development
✔ API integration with frontend
✔ Cybersecurity fundamentals
✔ Password entropy analysis
✔ Docker containerization
✔ Deploying SaaS-grade apps

---

## 🧑‍💻 Author

**Saw San Nyunt Win**
Cybersecurity Beginner → Building real projects to get hired.

---

## 🤝 Contribution Guidelines

### 🛠️ Ways to Contribute

* Improve UI/UX
* Add password rules
* Dark mode
* Enhance backend security
* Integrate password breach checks

### 🔀 Pull Request Steps

1. Fork the repo
2. Create feature branch:

```bash
git checkout -b feature-name
```

3. Commit changes
4. Open Pull Request

---

## ⭐ Contribute

PRs are welcome! If you improve the UI, add features, or fix bugs, feel free to submit a pull request.

---

## 📄 License

MIT License – Free to use and modify.

---

### 🎉 Thank you for checking out this project!

If you like this project, please ⭐ the repo on GitHub!

---
