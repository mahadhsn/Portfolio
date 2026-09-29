/* eslint-env node */

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, subject, website } = req.body ?? {};

  // Honeypot: hidden field real users never fill. Pretend success so bots don't retry.
  if (website) return res.status(200).json({ message: "Email sent" });

  const fields = [firstName, lastName, email, subject];
  const valid =
    fields.every((f) => typeof f === "string" && f.trim()) &&
    firstName.length <= 50 &&
    lastName.length <= 50 &&
    subject.length <= 2000 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    email.length <= 254;
  if (!valid) return res.status(400).json({ message: "Invalid input" });

  const formattedSubject = `Contact Form Submission from ${firstName} ${lastName}`;
  const formattedBody = `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Subject: ${subject}
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: formattedSubject,
    text: formattedBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
