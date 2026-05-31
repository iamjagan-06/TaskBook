# TaskBook
TaskBook-Task-master-pro is Simple To-do List task management web application, which will handle your daily tasks and To-do Lists.
# ✅ Priority-Based Todo App

A full-stack Todo application that goes beyond basic task management with priority-based organization, secure authentication, and a clean modern UI.

---

## 📌 Features

- ✏️ Create, edit, and delete tasks seamlessly
- 🔴 Assign priority levels — **Low**, **Medium**, **High** — with visual indicators
- 🔃 Sort and filter tasks by priority and completion status
- 🔐 Secure user authentication (Signup / Login)
- 💾 Persistent data storage with user-specific task management
- 🕐 Task timestamps — created & last updated
- 📱 Responsive and intuitive UI/UX design

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT / bcrypt |

---

## 📁 Project Structure

```
todo-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Login, Signup, Dashboard
│   │   └── App.js
├── server/                 # Node.js + Express backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   └── server.js
├── .env.example
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2. **Install backend dependencies**
```bash
cd server
npm install
```

3. **Install frontend dependencies**
```bash
cd ../client
npm install
```

4. **Set up environment variables**
```bash
# In /server, create a .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. **Run the application**
```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm start
```

6. Open your browser at `http://localhost:3000`

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

---

## 📸 Screenshots
> Add screenshots of your app here
> <img width="1219" height="744" alt="Task Master Pro-1" src="https://github.com/user-attachments/assets/1da16977-4fc0-4856-aa71-35063a7a3b7c" />
> <img width="1216" height="747" alt="Task Master Pro-2" src="https://github.com/user-attachments/assets/77698987-854a-4e3d-88c6-05c93a72f0c3" />
> <img width="1214" height="749" alt="Task Master Pro-3" src="https://github.com/user-attachments/assets/33dd3950-8f34-44e8-9481-40a490395c4d" />
> <img width="1216" height="741" alt="Task Master Pro-4" src="https://github.com/user-attachments/assets/b25c74a1-45ba-44f6-a62b-56ed151a96df" />
> <img width="1217" height="747" alt="Task Master Pro-5" src="https://github.com/user-attachments/assets/7fca2584-a85f-4017-b9b5-353614ad0858" />





---

## 🙋‍♂️ Author

**Your Name**
- GitHub: [iamjagan-06](https://github.com/iamjagan-06)
- LinkedIn: [Jagan E V](https://www.linkedin.com/in/jaganev662299/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
