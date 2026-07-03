import { useState, type FormEvent } from "react";

const interestOptions = [
  "Honey",
  "Wholesale",
  "Beeswax",
  "Skincare",
  "General question",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Honey",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div className="surface-kraft-texture border-b border-kraft-deep">
        <div className="container-main section-compact">
          <p className="text-label text-moss mb-3">The Honey Lab</p>
          <h1 className="font-display text-4xl md:text-5xl text-bark tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-lg text-prose">Questions? We answer.</p>
        </div>
      </div>

      <div className="container-main section !py-16 md:!py-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl">
          <div>
            <h2 className="font-display text-2xl text-bark mb-6">Get in touch</h2>

            <ul className="space-y-6 text-bark-soft">
              <li>
                <p className="text-label mb-1">Email</p>
                <a href="mailto:hello@thehoneylab.com" className="link-natural">
                  hello@thehoneylab.com
                </a>
              </li>
              <li>
                <p className="text-label mb-1">Phone</p>
                <a href="tel:+16195550100" className="link-natural">
                  (619) 555-0100
                </a>
              </li>
              <li>
                <p className="text-label mb-1">Location</p>
                <p>El Cajon, California</p>
              </li>
              <li>
                <p className="text-label mb-1">Response time</p>
                <p>We usually reply within a day.</p>
              </li>
            </ul>

            <div className="mt-10 p-5 card-paper">
              <p className="text-sm text-prose">
                <span className="font-medium text-bark">To order honey now:</span> email or call us directly.
                Online shop coming soon.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-label mb-3">Follow us</p>
              <div className="flex gap-4">
                <a href="#" className="link-natural text-sm">Instagram</a>
                <a href="#" className="link-natural text-sm">Facebook</a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="card-paper p-8 text-center">
                <p className="font-display text-2xl text-bark">Message sent.</p>
                <p className="mt-2 text-sm text-prose">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-label text-bark-soft block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-natural"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-label text-bark-soft block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-natural"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="text-label text-bark-soft block mb-2">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="input-natural"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-label text-bark-soft block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-natural resize-y"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
