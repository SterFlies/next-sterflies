"use client";

import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [error, setError] = useState<string | null>(null);

  // 1) Your exact Mailchimp action URL (copy from their embed)
  const action =
    "https://sterflies.us9.list-manage.com/subscribe/post?u=014a7cec35ea7dc291dca3434&id=faf43f94da&f_id=00a073e1f0";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setError(null);
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      e.preventDefault();
      setError("Please enter a valid email address.");
      return;
    }
    if (!fname.trim()) {
      e.preventDefault();
      setError("Please enter your first name.");
      return;
    }
    // posts to Mailchimp (new tab) — no extra JS required
  }

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Sign up to our Newsletter!</h2>
      <p className="mt-1 text-sm text-slate-600">
        <span className="text-rose-600">*</span> indicates required
      </p>

      <form
        action={action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="mt-5 space-y-4"
        target="_blank"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Email */}
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL" className="mb-1 block text-sm font-medium text-slate-700">
            Email Address <span className="text-rose-600">*</span>
          </label>
          <input
            type="email"
            id="mce-EMAIL"
            name="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* First Name */}
        <div className="mc-field-group">
          <label htmlFor="mce-FNAME" className="mb-1 block text-sm font-medium text-slate-700">
            First Name <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            id="mce-FNAME"
            name="FNAME"
            required
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Name"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Mailchimp response nodes (kept for compatibility, hidden) */}
        <div id="mce-responses" className="clear sr-only" aria-live="polite">
          <div className="response" id="mce-error-response" />
          <div className="response" id="mce-success-response" />
        </div>

        {/* 2) Honeypot field — must keep the exact name */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
          <input
            type="text"
            name="b_014a7cec35ea7dc291dca3434_faf43f94da"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        {error && <p className="text-sm font-medium text-rose-600">{error}</p>}

        <button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

