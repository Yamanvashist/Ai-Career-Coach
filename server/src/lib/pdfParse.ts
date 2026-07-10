import pdfParse from "pdf-parse";
import fs from "fs";


export const parsePdf = async (path: string) => {
  const buffer = fs.readFileSync(path);
  const data = await pdfParse(buffer);
  return data.text
};

