# AI Career Coach

> An AI-powered platform that helps developers analyze their resumes, improve coding skills, practice interviews, and track career readiness.

🔗 **Live Demo:** https://refineai-tau.vercel.app/

## ✨ Features

* **AI Resume Analyzer** — Upload a resume and get role-specific feedback, scoring, strengths, and improvements.
* **AI Code Analysis** — Get AI-powered feedback on code quality, logic, and complexity.
* **AI Interview Practice** — Practice role-specific interviews and receive performance feedback.
* **Career Dashboard** — Track Resume, Code, and Interview scores with a Career Readiness Index.
* **Activity History** — View and filter previous resume analyses, code reviews, and interviews.
* **Authentication** — JWT authentication with secure HTTP-only cookies.
* **Payments** — Razorpay integration for premium features.
* **AI Voice** — Text-to-speech powered by ElevenLabs.

## Tech Stack

**Frontend:** Next.js, React, TypeScript, Tailwind CSS, TanStack Query, Zustand, Recharts

**Backend:** Node.js, Express.js, TypeScript, Prisma, PostgreSQL

**Services:** AI APIs, ElevenLabs, Razorpay

**Deployment:** Vercel + Render

## 🏗️ Architecture

```text
Next.js Frontend
       │
       ▼
Express.js API
   ┌───┼────┬──────────┐
   ▼   ▼    ▼          ▼
 AI  Prisma PostgreSQL Razorpay
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file in the backend:

```env
DATABASE_URL="your_database_url"
JWT_SECRET="your_jwt_secret"
CLIENT_URL="http://localhost:3000"
AI_API_KEY="your_ai_api_key"
ELEVENLABS_API_KEY="your_elevenlabs_api_key"
RAZORPAY_KEY_ID="your_razorpay_key"
RAZORPAY_KEY_SECRET="your_razorpay_secret"
```

### 4. Setup database

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the application

```bash
# Backend
npm run dev

# Frontend
npm run dev
```

Then open **http://localhost:3000**.

## 🎯 Purpose

AI Career Coach brings resume analysis, coding evaluation, interview preparation, and career tracking into a single platform.

Built to explore **AI integration, full-stack architecture, authentication, payments, database design, and cloud deployment**.

## Author

**Yaman Vashist** — Full-Stack Web Developer

⭐ If you found the project interesting, consider starring the repository.
