import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-kraft-deep surface-kraft-texture">
      <div className="container-main py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-bark">The Honey Lab</p>
            <p className="mt-2 text-sm text-bark-soft">El Cajon, California</p>
            <p className="mt-4 text-sm text-prose max-w-xs">
              Small-batch honey from bees working across California.
            </p>
          </div>

          <div>
            <p className="text-label text-bark-soft mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-bark-soft">
              <li>
                <a href="mailto:hello@thehoneylab.com" className="link-natural">
                  hello@thehoneylab.com
                </a>
              </li>
              <li>
                <a href="tel:+16195550100" className="link-natural">
                  (619) 555-0100
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-label text-bark-soft mb-4">Follow</p>
            <ul className="space-y-2 text-sm text-bark-soft">
              <li>
                <a href="#" className="link-natural" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="link-natural" aria-label="Facebook">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule-botanical my-10" />

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-bark-soft/80 hover:text-bark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-6 text-xs text-bark-soft/50">
          © {new Date().getFullYear()} The Honey Lab
          <span className="mx-2">·</span>
          <Link to="/style-guide" className="hover:text-bark transition-colors">
            Brand guide
          </Link>
        </p>
      </div>
    </footer>
  );
}
