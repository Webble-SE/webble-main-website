import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type Inquiry = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  source: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "inquiries.json");

async function readAll(): Promise<Inquiry[]> {
  try {
    const raw = await readFile(dataFile, "utf8");
    const parsed = JSON.parse(raw) as Inquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveInquiry(input: Omit<Inquiry, "id" | "createdAt">) {
  await mkdir(dataDir, { recursive: true });
  const inquiries = await readAll();
  const inquiry: Inquiry = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  inquiries.unshift(inquiry);
  await writeFile(dataFile, JSON.stringify(inquiries, null, 2), "utf8");
  return inquiry;
}

export async function listInquiries() {
  return readAll();
}
