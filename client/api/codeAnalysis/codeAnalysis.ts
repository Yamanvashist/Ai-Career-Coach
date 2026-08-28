import api from "../api";

interface CodeInput {
  code: string;
  language: string;
}

export const analyzeCode = async ({ code, language }: CodeInput) => {
  const { data } = await api.post("/codeAnalysis", {
    code,
    language,
  });
  return data;
};
