// app/contact/page.tsx
"use client";

import React, { useState, useRef, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!captcha) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptcha: captcha }),
      });
    
        if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Network response was not ok");
      }

      // success! clear form & captcha
      setForm({ name: "", email: "", phone: "", message: "" });
      recaptchaRef.current?.reset();
      setCaptcha(null);
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Get In Touch
      </h1>
      <p className="text-lg text-gray-800 mb-12">
        Have a project in mind? Drop us a line or fill out the form below and we’ll
        get back to you within 24 hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Email</h2>
            <a
              href="mailto:jerome.sterling@sterflies.com"
              className="text-blue-600 hover:underline"
            >
              jerome.sterling@sterflies.com
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Location</h2>
            <p className="text-gray-700">San Antonio, TX</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600"
            />

          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600"
            />
          </div>

          {/* reCAPTCHA */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeE8X8rAAAAAMPjrVr6XQzkWLNRgCCKCOdgYIRH"
            onChange={(token) => setCaptcha(token)}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full inline-flex justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
          {status === "sent" && (
            <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
          )}
        </form>
      </div>
    </section>
  );
}
