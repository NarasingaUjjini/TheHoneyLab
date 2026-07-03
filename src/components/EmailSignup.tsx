import { useState, type FormEvent } from "react";

interface EmailSignupProps {
  heading?: string;
  subtext?: string;
  compact?: boolean;
}

export default function EmailSignup({
  heading = "Be the first to try new batches",
  subtext = "We only email when a new batch is ready. No weekly newsletters, no coupons.",
  compact = false,
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  if (submitted) {
    return (
      <div className={compact ? "text-center" : "container-narrow text-center"}>
        <p className="font-display text-2xl text-bark">You&apos;re on the list.</p>
        <p className="mt-2 text-sm text-prose">We&apos;ll be in touch when the next batch is ready.</p>
      </div>
    );
  }

  return (
    <div className={compact ? "" : "container-narrow text-center"}>
      <h2 className={`font-display text-bark ${compact ? "text-xl" : "text-2xl md:text-3xl"}`}>
        {heading}
      </h2>
      <p className={`mt-3 text-prose ${compact ? "text-sm" : ""}`}>{subtext}</p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <label htmlFor="email-signup" className="sr-only">
          Email address
        </label>
        <input
          id="email-signup"
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-natural flex-1 max-w-sm mx-auto sm:mx-0"
        />
        <button type="submit" className="btn btn-primary whitespace-nowrap">
          Notify me
        </button>
      </form>
    </div>
  );
}
