import { NextResponse } from "next/server";
import { submitInquiry } from "@/lib/actions/contact";

export async function POST(request: Request) {
  const formData = await request.formData();
  const result = await submitInquiry({ status: "idle" }, formData);

  const status = result.status === "success" ? 200 : 400;
  return NextResponse.json(result, { status });
}
