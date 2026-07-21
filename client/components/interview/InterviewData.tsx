import { Braces, Code2, Database, Globe, Layers3, Server } from 'lucide-react';

const Interviews = [
  {
    title: "MERN Stack",
    description: "React, Node.js, Express, MongoDB, JWT, Authentication & APIs.",
    icon: Layers3,
    difficulty: "Medium",
    duration: "15 mins",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Full Stack",
    description: "Frontend + Backend interview covering complete web development.",
    icon: Globe,
    difficulty: "Hard",
    duration: "20 mins",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "JavaScript",
    description: "Closures, Event Loop, Promises, Async/Await, DOM and ES6.",
    icon: Braces,
    difficulty: "Medium",
    duration: "12 mins",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Python",
    description: "Functions, OOP, DSA basics, modules and problem solving.",
    icon: Code2,
    difficulty: "Medium",
    duration: "15 mins",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Backend",
    description: "Node.js, Express, APIs, Authentication, Databases & Security.",
    icon: Server,
    difficulty: "Hard",
    duration: "18 mins",
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Database",
    description: "SQL, PostgreSQL, MongoDB, Indexing, Relations & Queries.",
    icon: Database,
    difficulty: "Easy",
    duration: "10 mins",
    color: "bg-purple-100 text-purple-600",
  },
];


export default Interviews;