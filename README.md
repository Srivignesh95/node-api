# 🌐 Portfolio (Node.js)

A personal portfolio web application built using **Node.js** and **Express.js**, designed to showcase projects, experiences, and other professional highlights.

This project is deployed using:

## 🚀 Live Demo

- **Frontend**: [https://portfolio-react-srivigneshs-projects.vercel.app/]
- **Backend**: [https://node-api-5-wjsc.onrender.com/] //First run this before running Frontend

---

## 📂 Project Structure

```
/index.js         → Main server entry point  
/package.json     → Project metadata and scripts  
/public/          → Static files (images, fonts, etc.)  
/views/           → View templates (if using Pug/EJS/etc.)  
/routes/          → Express route handlers  
```

---

## 🚀 Features

- Dynamic project and experience sections
- API integration for content
- Modular file structure
- Responsive layout (frontend handled via Vercel)

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **Nodemon** (for local development)
- **Vercel** (Frontend deployment)
- **Render** (Backend API deployment)

---

## 📦 Installation

1. **Clone the repo**
```bash
git clone https://github.com/Srivignesh95/node-api.git
cd node-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the app locally**
```bash
npm run dev  # Starts the app with nodemon
```

> Make sure `nodemon` is in `dependencies` or installed globally.

---

## 🚀 Deployment

### 🔹 Backend (Render)
1. Push your code to a GitHub repo.
2. Go to [render.com](https://render.com) > **New Web Service**
3. Connect your GitHub repo.
4. Set the **Build Command**:
```bash
npm install
```
5. Set the **Start Command**:
```bash
npm start
```
6. Choose a Node version.

### 🔸 Frontend (Vercel)
1. Push your frontend code to GitHub (if in a separate folder/repo).
2. Go to [vercel.com](https://vercel.com) > **Import Project**
3. Select your repo and follow the prompts.
4. Set the root folder if needed (like `/client` or `/frontend`).
5. Vercel auto-deploys on push.

---

## 🔧 Scripts

| Script       | Purpose                         |
|--------------|---------------------------------|
| `npm start`  | Starts server with `node`       |
| `npm run dev`| Starts server with `nodemon`    |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Author

Made with ❤️ by Srivignesh Kavle S.
