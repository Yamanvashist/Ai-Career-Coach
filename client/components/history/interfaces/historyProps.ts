export interface HistoryProps {
  id: string;
  type: "RESUME" | "CODE_ANALYSIS" | "INTERVIEW";
  title: string;
  description: string;
  score: number | null;
  status?: "ONGOING" | "COMPLETED";
  createdAt: string;
}
