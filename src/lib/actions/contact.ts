"use server";

import { saveInquiry } from "@/lib/inquiries";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (readString(formData, "company_website")) {
    return { status: "success", message: "Tack. Vi återkommer inom en arbetsdag." };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const phone = readString(formData, "phone");
  const company = readString(formData, "company");
  const message = readString(formData, "message");
  const source = readString(formData, "source") || "/kontakt";
  const consent = formData.get("consent") === "on";

  if (!name || name.length < 2) {
    return { status: "error", message: "Skriv ert namn så vi vet vem vi återkopplar till." };
  }

  if (!emailPattern.test(email)) {
    return { status: "error", message: "Kontrollera e-postadressen." };
  }

  if (message.length < 12) {
    return { status: "error", message: "Berätta kort vad ni behöver hjälp med." };
  }

  if (!consent) {
    return {
      status: "error",
      message: "Vi behöver ert godkännande för att spara uppgifterna och höra av oss.",
    };
  }

  try {
    await saveInquiry({ name, email, phone, company, message, source });
    return { status: "success", message: "Tack. Vi återkommer inom en arbetsdag." };
  } catch (error) {
    console.error("Failed to store inquiry", error);
    return {
      status: "error",
      message: "Något gick fel när meddelandet skulle sparas. Mejla info@webble.se så tar vi det där.",
    };
  }
}
