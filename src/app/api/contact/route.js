import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error("Missing Web3Forms access key in server environment.");
      return NextResponse.json(
        { error: "Contact form is not configured on the server." },
        { status: 500 }
      );
    }

    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Enquiry: ${service}`,
        from_name: "The Leadership Method Website",
        name,
        email,
        service,
        message,
        botcheck: "",
      }),
      cache: "no-store",
    });

    const contentType = web3FormsResponse.headers.get("content-type") || "";
    const rawBody = await web3FormsResponse.text();
    const data = contentType.includes("application/json")
      ? JSON.parse(rawBody)
      : null;

    if (!web3FormsResponse.ok || !data?.success) {
      console.error("Web3Forms submission failed:", {
        status: web3FormsResponse.status,
        contentType,
        body: rawBody.slice(0, 300),
      });
      return NextResponse.json(
        { error: data?.message || "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
