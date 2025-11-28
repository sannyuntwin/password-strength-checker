# 🔒 Password Strength Checker (SaaS-Style)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" />
  <img src="https://img.shields.io/badge/Frontend-Next.js-black" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
  <img src="https://img.shields.io/badge/SaaS-Ready-orange" />
</p>
A professional, modern, SaaS-grade **Password Strength Checker** built with **Next.js**, **FastAPI (Python)**, **Zxcvbn**, and a clean UI powered by **TailwindCSS**, **ShadCN/UI**, and **Framer Motion**.

This project is designed for beginners entering cybersecurity who want a real, deployable, portfolio-ready project that looks professional and showcases full‑stack skills.

---

## 🚀 Features

* 🔐 **Real-time password strength evaluation** using Zxcvbn
* 🎨 **Modern SaaS UI** with clean design and animations
* ⚡ **Full-stack**: Next.js frontend + Node.js backend
* 🧪 Strength scoring from 0–4 with verdict labels
* 📡 API-based architecture (frontend calls backend)
* 📱 Fully responsive
* ☁️ Ready to deploy on **Vercel** (frontend) and **Render** / **Railway** (backend)

---

## 🛠️ Tech Stack

### **Frontend**

* Next.js 14 (App Router)
* React
* TailwindCSS
* ShadCN/UI
* Framer Motion

### **Backend**

* Node.js
* Express.js
* Zxcvbn (password analyser)
* CORS

---

## 📁 Project Structure

```
password-strength-checker/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   └── ...
│
└── frontend/
    ├── src/app/login/page.tsx
    ├── src/components/
    ├── package.json
    └── ...
```

---

## ⚙️ Installation & Setup

### **1. Clone the repository**

```
git clone https://github.com/yourusername/password-strength-checker.git
cd password-strength-checker
```

---

## 🌐 Backend Setup (Express API)

```
cd backend
npm install
npm start
```

The backend will run on:

```
http://localhost:5000
```

---

## 🎨 Frontend Setup (Next.js)

```
cd frontend
npm install
npm run dev
```

The app will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoint

### **POST /check**

```
http://localhost:5000/check
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
  "score": 3,
  "verdict": "Strong"
}
```

---

## 🚀 Build for Production

### **Frontend**

```
cd frontend
npm run build
npm start
```

### **Backend**

Backend is already production‑ready.

---

## ☁️ Deployment

### **Frontend → Vercel**

1. Push your frontend folder to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import the repo
4. Set backend API URL as environment variable (optional)
5. Deploy

### **Backend → Render / Railway**

1. Create new **Web Service**
2. Connect backend folder
3. Set start command:

```
node index.js
```

4. Deploy

---

## 🖼️ Screenshots

Add your screenshots after deployment:

```
frontend/public/screenshot-1.png
frontend/public/screenshot-2.png
```

Example layout:

| Dashboard                             | Password Strength UI                    |
| ------------------------------------- | --------------------------------------- |
| ![Dashboard](public/screenshot-1.png) | ![Strength UI](public/screenshot-2.png) |

*(Add UI screenshots here after deployment)*

---

## 📚 What You Learn

✔ Full-stack development
✔ API integrations
✔ Cybersecurity fundamentals
✔ Password entropy + Zxcvbn analysis
✔ Building a production‑grade Next.js app
✔ Deploying to Vercel & Render

---

## 🧑‍💻 Author

**Saw San Nyunt Win**
Cybersecurity Beginner → Building real projects to get hired.

---

## 🤝 Contribution Guidelines

We welcome contributions! Here’s how to help:

### 🛠️ Ways to Contribute

* Improve UI/UX
* Add more strength rules
* Add dark mode
* Improve backend security
* Add password breach check (HaveIBeenPwned API)

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
