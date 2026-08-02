import {
  LayoutGrid,
  FileText,
  Code2,
  Users,
  LayoutDashboard,
  Mic,
} from "lucide-react";


export const categories = [
  { id: "ALL", label: "All", icon: LayoutGrid },
  { id: "RESUME", label: "Resume", icon: FileText },
  { id: "CODE_ANALYSIS", label: "Code Analysis", icon: Code2 },
  { id: "INTERVIEW", label: "Interview", icon: Users },
] as const;

export const historyData = [
  {
    activity: "Frontend Resume Review",
    type: "Resume",
    score: "86%",
    status: "Completed",
  },
  {
    activity: "React Code Analysis",
    type: "Code Analysis",
    score: "92%",
    status: "Completed",
  },
  {
    activity: "JavaScript Interview",
    type: "Interview",
    score: "78%",
    status: "Completed",
  },
] as const;

export const quickLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    styles: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
  },
  {
    name: "Resume",
    href: "/resume-review",
    icon: FileText,
    styles: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
  },
  {
    name: "Code Review",
    href: "/analysis",
    icon: Code2,
    styles: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  },
  {
    name: "Interview",
    href: "/interview",
    icon: Mic,
    styles: "bg-purple-50 text-purple-600 hover:bg-purple-100",
  },
];