# 🚀 AI Career Coach

> An AI-powered career development platform that helps users analyze their resumes, evaluate coding skills, practice interviews, and track their overall career readiness.

**AI Career Coach** is a full-stack SaaS application designed to act as a personal AI career assistant. It combines **resume analysis, coding evaluation, AI-powered interview practice, career insights, and progress tracking** into a single platform.

The goal is simple: **help developers understand where they currently stand and what they should improve next.**

---

## 🌐 Live Demo

🔗 **[AI Career Coach](https://refineai-tau.vercel.app/)**

---

## ✨ Features

### 📄 AI Resume Analyzer

Upload your resume and provide a target job role to receive an AI-powered analysis.

- Resume parsing from PDF
- Target-role based evaluation
- Resume scoring
- Strength and weakness identification
- Improvement suggestions
- Job-specific feedback
- Resume analysis history

---

### 💻 AI Code Analysis

Evaluate coding solutions using AI.

- Submit coding problems and solutions
- AI-powered code review
- Logic and correctness analysis
- Complexity evaluation
- Code quality feedback
- Improvement suggestions
- Track previous code analyses

---

### 🎤 AI Interview Practice

Practice interviews with an AI interviewer.

- AI-generated interview questions
- Role-specific questions
- Interview evaluation
- Feedback on answers
- Performance scoring
- Interview history
- Identify areas for improvement

---

### 📊 Career Dashboard

A centralized dashboard that gives users an overview of their career progress.

Includes:

- **Career Readiness Index**
- Resume Score
- Interview Score
- Code Analysis Score
- Recent activity
- Quick actions
- Progress visualization
- Career performance history

---

### 📚 Activity History

All career-related activities are organized in one place.

Users can filter their history by:

- All
- Resume Analysis
- Code Analysis
- Interviews

This allows users to track their progress over time instead of treating every analysis as an isolated interaction.

---

### 🔐 Authentication & Security

- Secure user authentication
- JWT-based authentication
- HTTP-only cookies
- Protected routes
- Server-side authorization
- Secure API communication

---

### 💳 Subscription & Payments

The platform includes a subscription-ready payment system using **Razorpay**.

Users can purchase premium access and the backend handles:

- Order creation
- Payment verification
- Secure signature validation
- Subscription-related credit management

---

## 🧠 How It Works

```text
                    ┌─────────────────────┐
                    │      User           │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Next.js Frontend  │
                    │                     │
                    │ Dashboard           │
                    │ Resume Analyzer     │
                    │ Code Analysis       │
                    │ Interview Practice  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express Backend   │
                    │                     │
                    │ Authentication      │
                    │ API Controllers     │
                    │ AI Processing       │
                    │ Payments            │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
       ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
       │ PostgreSQL  │  │ AI Services │  │  Razorpay   │
       │   Prisma    │  │             │  │  Payments   │
       └─────────────┘  └─────────────┘  └─────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **TanStack Query**
- **Zustand**
- **Recharts**
- **Axios**

## Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

## Authentication

- JWT
- HTTP-only cookies
- Secure cookie-based authentication

## AI & External Services

- AI APIs for career analysis
- AI-powered resume evaluation
- AI code analysis
- AI interview evaluation
- ElevenLabs for text-to-speech

## Payments

- Razorpay

## Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** PostgreSQL

---

# 🏗️ Project Architecture

The project follows a separation between the frontend and backend.

```text
AI-Career-Coach/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── store/
│   └── public/
│
└── backend/
    ├── controllers/
    ├── routes/
    ├── middleware/
    ├── services/
    ├── lib/
    └── prisma/
```

The frontend communicates with the Express API using HTTP requests, while the backend handles authentication, business logic, AI processing, database operations, and payments.

---

# 🗄️ Database

The application uses **PostgreSQL** with **Prisma ORM**.

Core entities include:

```text
User
 │
 ├── Profile
 │
 ├── Resume
 │
 ├── CodeAnalysis
 │
 └── Interview
```

This structure allows the application to maintain a complete history of a user's career development activities.

---

# 🔑 Core Functionalities

| Feature            | Description                        |
| ------------------ | ---------------------------------- |
| Authentication     | Secure user registration and login |
| Resume Analysis    | AI-powered resume evaluation       |
| Code Analysis      | AI-powered coding feedback         |
| Interview Practice | AI-generated interview preparation |
| Dashboard          | Career progress overview           |
| History            | Track previous activities          |
| Payments           | Razorpay payment integration       |
| Text-to-Speech     | AI voice interaction               |
| Protected Routes   | Authenticated access control       |

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

- Node.js 18+
- npm / yarn / pnpm
- PostgreSQL
- Git

---

## 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd YOUR_REPOSITORY
```

---

## 2. Install dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

## 3. Configure environment variables

Create a `.env` file in the backend directory.

```env
DATABASE_URL="your_postgresql_database_url"

JWT_SECRET="your_jwt_secret"

CLIENT_URL="http://localhost:3000"

AI_API_KEY="your_ai_api_key"

ELEVENLABS_API_KEY="your_elevenlabs_api_key"

RAZORPAY_KEY_ID="your_razorpay_key"

RAZORPAY_KEY_SECRET="your_razorpay_secret"
```

> Never commit your `.env` file or expose secret API keys publicly.

---

## 4. Setup Prisma

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

---

## 5. Start the backend

```bash
npm run dev
```

---

## 6. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# 🔒 Environment Variables

| Variable              | Purpose                   |
| --------------------- | ------------------------- |
| `DATABASE_URL`        | PostgreSQL connection     |
| `JWT_SECRET`          | JWT signing secret        |
| `CLIENT_URL`          | Frontend URL              |
| `AI_API_KEY`          | AI service authentication |
| `ELEVENLABS_API_KEY`  | Text-to-speech            |
| `RAZORPAY_KEY_ID`     | Razorpay public key       |
| `RAZORPAY_KEY_SECRET` | Razorpay server secret    |

---

# 📈 Career Readiness System

The dashboard combines multiple signals to provide a simplified view of a user's career preparation.

```text
Resume Score
      │
      ├──────────────┐
      │              │
Code Score ─────► Career Readiness
      │              │
      │              │
Interview Score ────┘
```

Instead of focusing on a single metric, the application evaluates multiple areas that are important during the software engineering job search.

---

# 🎯 Why I Built This

Preparing for software engineering interviews often requires using multiple disconnected tools:

- Resume builders
- Resume scanners
- Coding platforms
- Interview preparation websites
- Career tracking tools

AI Career Coach brings these workflows together into a single platform.

The project was also built to explore how modern full-stack applications can combine:

**AI + SaaS architecture + authentication + payments + analytics + cloud deployment.**

---

# 🧩 Engineering Challenges

Some of the main engineering challenges involved:

### 🔐 Secure Authentication

Implemented JWT authentication using HTTP-only cookies while handling authentication across a separately deployed frontend and backend.

### 📄 Resume Processing

Built a PDF upload and processing pipeline that extracts resume content before sending it for AI evaluation.

### 🤖 AI Integration

Designed structured AI workflows for different use cases including resume analysis, code review, and interview evaluation.

### 💳 Payment Verification

Implemented Razorpay order creation and server-side payment signature verification instead of trusting payment information from the client.

### 📊 Unified Activity History

Combined different database entities into a single activity feed so users can view resume analyses, interviews, and code evaluations from one interface.

---

# 🔮 Future Improvements

Some planned improvements include:

- [ ] Personalized career roadmaps
- [ ] Job recommendation system
- [ ] ATS resume optimization
- [ ] LinkedIn profile analysis
- [ ] Real-time AI interview conversations
- [ ] Voice-based interview practice
- [ ] Advanced career analytics
- [ ] More subscription plans
- [ ] Personalized learning recommendations
- [ ] Job application tracking
- [ ] GitHub profile analysis

---

# 📸 Screenshots

> Add screenshots of the dashboard, resume analyzer, code analysis, and interview pages here.

```text
/screenshots
├── dashboard.png
├── resume-analyzer.png
├── code-analysis.png
└── interview.png
```

---

# 👨‍💻 Author

**Yaman Vashist**

Full-Stack Web Developer interested in building modern web applications, AI-powered products, and scalable backend systems.

---

## ⭐ Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is currently intended for educational and portfolio purposes.
