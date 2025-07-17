// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_EMAIL,
    RECAPTCHA_SECRET_KEY,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !CONTACT_EMAIL ||
    !RECAPTCHA_SECRET_KEY
  ) {
    throw new Error(
      "Missing env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL, RECAPTCHA_SECRET_KEY"
    );
  }

  const { name, email, phone, message, recaptcha } = await request.json();
  if (!recaptcha) {
    return NextResponse.json({ message: "Please complete reCAPTCHA." }, { status: 400 });
  }

  // Verify reCAPTCHA
  const params = new URLSearchParams({
    secret: RECAPTCHA_SECRET_KEY,
    response: recaptcha,
  });
  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    }
  );
  const verifyJson = await verifyRes.json();
  if (!verifyJson.success) {
    return NextResponse.json(
      { message: "reCAPTCHA failed", errors: verifyJson["error-codes"] || [] },
      { status: 400 }
    );
  }

  // Send email
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT, 10),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const mailOptions = {
    from: SMTP_USER,                              // must match your SMTP user
    replyTo: `"${name}" <${email}>`,              // visitor’s address here
    to: CONTACT_EMAIL,                            // where you want it delivered
    subject: `SterFlies Web Inquirey>`,
    text: `
Name:    ${name}
Email:   ${email}
Phone:   ${phone || "n/a"}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Message sent successfully." });
  } catch (err: unknown) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}

