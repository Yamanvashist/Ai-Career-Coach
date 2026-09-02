# 🚀 AI Career Coach

<p align="center">
  <strong>AI-powered career guidance for resumes, skill gaps, learning roadmaps, and interview preparation.</strong>
</p>

<p align="center">
  <a href="https://ai-career-coachz.netlify.app/" target="_blank">🌐 Live Demo</a>
  •
  <a href="#-features">Features</a>
  •
  <a href="#-tech-stack">Tech Stack</a>
  •
  <a href="#-getting-started">Getting Started</a>
</p>

---

## 🧠 Overview

**AI Career Coach** is a full-stack AI-powered career platform designed to help students, developers, and job seekers move from **“I don't know what to improve”** to **“I know exactly what to work on next.”**

Instead of using separate tools for resume feedback, skill analysis, interview preparation, and career planning, AI Career Coach brings these workflows together into one platform.

The application analyzes a user's career profile and provides actionable guidance around:

* 📄 Resume quality
* 🎯 Target-role skill gaps
* 🗺️ Personalized learning roadmaps
* 💬 Interview preparation
* 📈 Career progress
* 🤖 AI-powered career recommendations

### 🌐 Live Application

**https://ai-career-coachz.netlify.app/**

---

## ✨ Features

### 📄 AI Resume Analysis

Upload your resume and receive AI-powered feedback focused on improving clarity, impact, and recruiter-readiness.

The system helps identify:

* Resume strengths
* Weak sections
* Improvement opportunities
* Missing or weak skills
* Actionable recommendations

---

### 🎯 Skill Gap Detection

Trying to become a frontend developer, backend developer, full-stack engineer, or move into another role?

AI Career Coach compares your current profile with your target career direction and highlights the skills you need to improve.

Example:

```text
TypeScript       █████████░ 90%
Node.js          ███████░░░ 72%
System Design    ████░░░░░░ 45%
```

This makes it easier to understand **what you're good at, what's missing, and what deserves your attention next.**

---

### 🗺️ Personalized Career Roadmaps

Instead of randomly jumping between tutorials, users get a structured learning direction based on their career goals.

The roadmap can help answer questions like:

> What should I learn next?

> Which skills matter most for my target role?

> What should I prioritize before applying for jobs?

---

### 🎤 Interview Preparation

Prepare for interviews with role-focused questions and AI-assisted guidance.

The platform is designed to help users practice common interview concepts while improving both **technical preparation and confidence**.

---

### 📊 Career Dashboard

A centralized dashboard gives users a quick overview of their progress.

It can surface information such as:

* Resume score
* Interview readiness
* Skill-gap progress
* Learning roadmap
* Career recommendations

---

### 📈 Progress Tracking

Career growth is easier when progress is measurable.

Track milestones and monitor improvement over time instead of relying on the classic:

> “Bro I think I learned enough.” 💀

---

### 🤖 AI Career Insights

Get personalized recommendations based on your profile, skills, goals, and career direction.

The goal isn't just to generate AI text.

The goal is to turn AI output into **clear next actions.**

---

## 🛠️ Tech Stack

> Update this section to exactly match your production repository dependencies.

### Frontend

* React
* Next.js
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL / MongoDB
* Prisma / Mongoose

### AI

* Google Gemini API

### Authentication

* Google OAuth
* JWT / HTTP-only cookies

### File Processing

* PDF parsing
* Multer

### Deployment

* Netlify / Vercel
* Render / Cloud hosting

### Developer Tools

* Git
* GitHub
* VS Code
* npm

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │      Frontend       │
                    │ React / Next.js     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Backend        │
                    │ Node.js / Express   │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        ┌───────────┐    ┌───────────┐    ┌───────────┐
        │ Database  │    │ Gemini AI  │    │   Auth    │
        │           │    │           │    │ OAuth/JWT │
        └───────────┘    └───────────┘    └───────────┘
```

---

## 🔄 How It Works

### 1. Create Your Profile

Users provide information about their background, skills, and career goals.

### 2. Upload Your Resume

The application processes the resume and extracts relevant career information.

### 3. AI Analysis

AI analyzes the available information and identifies strengths, weaknesses, and potential skill gaps.

### 4. Get Your Roadmap

The platform generates a personalized learning path based on the user's career direction.

### 5. Prepare for Interviews

Users can practice interview questions and improve their readiness.

### 6. Track Progress

Progress can be monitored through the dashboard to maintain a structured career-development workflow.

---

## 💳 Pricing & Credit System

The platform uses a credit-based system for AI-powered operations.

| Plan        |      Price | Credits | Highlights                                     |
| ----------- | ---------: | ------: | ---------------------------------------------- |
| 🆓 Starter  |   ₹0/month |      30 | Essential resume suggestions                   |
| 🚀 Pro      | ₹299/month |     300 | Priority AI review + interview boost           |
| 💎 Ultimate | ₹699/month |    1000 | Unlimited resume checks + mock interview suite |

### One-Time Credit Bundles

| Bundle      | Price |
| ----------- | ----: |
| 100 Credits |   ₹99 |
| 250 Credits |  ₹199 |
| 500 Credits |  ₹349 |

Credits can be used for AI-powered operations such as resume reviews, skill-gap reports, interview-question generation, and custom coaching tasks.

---

## 🖥️ Screenshots

Add screenshots of your actual product here.

```md
![Dashboard](./screenshots/dashboard.png)

![Resume Analysis](./screenshots/resume-analysis.png)

![Interview Preparation](./screenshots/interview.png)
```

> Tip: GitHub README screenshots make a huge difference. A good project with no screenshots looks suspiciously like a college assignment from 2017. 😭

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd YOUR_REPOSITORY
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add the required configuration.

Example:

```env
DATABASE_URL=your_database_url

GEMINI_API_KEY=your_gemini_api_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:3000
SERVER_URL=http://localhost:5000
```

> Never commit your `.env` file or expose API keys publicly.

### 4. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📁 Project Structure

Example structure:

```text
ai-career-coach/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   └── ...
│
├── prisma/
│   └── schema.prisma
│
├── .env.example
├── package.json
└── README.md
```

---

## 🔐 Security Considerations

The application is designed around common web security practices, including:

* HTTP-only authentication cookies
* Environment-based secret management
* Server-side API communication
* Protected backend routes
* Input validation
* Secure authentication flows

> Keep all production secrets and API credentials on the server.

---

## 🎯 Why I Built This

Finding a job isn't just about having a resume.

You need to understand:

```text
Where am I?
      ↓
What skills am I missing?
      ↓
What should I learn?
      ↓
How should I prepare?
      ↓
Am I ready for interviews?
```

AI Career Coach was built to connect those steps into one continuous workflow.

The project also explores how modern AI can be integrated into a real-world full-stack application rather than being used as just a chatbot.

---

## 🧪 Future Improvements

Some planned improvements include:

* [ ] Advanced ATS resume scoring
* [ ] Resume builder
* [ ] Job description matching
* [ ] Personalized job recommendations
* [ ] Real-time interview simulation
* [ ] Voice-based mock interviews
* [ ] Interview performance analytics
* [ ] More detailed career analytics
* [ ] Learning-resource recommendations
* [ ] Application tracking system
* [ ] Improved AI personalization

---

## 🌟 What Makes This Project Interesting

AI Career Coach isn't just an AI wrapper.

It combines several pieces of a modern full-stack product:

```text
Authentication
      +
File Processing
      +
AI Integration
      +
Database Management
      +
Career Analytics
      +
Interview Systems
      +
Subscription / Credits
      +
Modern UI
```

That makes it a practical example of building and deploying an AI-powered SaaS-style application.

---

## 👨‍💻 Author

### Yaman

Full-stack developer passionate about building modern web applications and experimenting with AI-powered products.

🌐 **Live Project:**
https://ai-career-coachz.netlify.app/

---

## ⭐ Support

Found the project useful or interesting?

Give the repository a ⭐ on GitHub — it genuinely helps.

---

## 📜 License

This project is licensed under the **MIT License**.

---
