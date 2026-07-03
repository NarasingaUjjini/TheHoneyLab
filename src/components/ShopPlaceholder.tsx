import { Link } from "react-router-dom";
import { ButtonLink } from "./ui/Button";

interface ShopPlaceholderProps {
  variant?: "default" | "inline";
}

export default function ShopPlaceholder({ variant = "default" }: ShopPlaceholderProps) {
  if (variant === "inline") {
    return (
      <p className="text-sm text-prose">
        Online ordering coming soon.{" "}
        <Link to="/contact" className="link-natural underline underline-offset-2">
          Contact us to order now
        </Link>
        .
      </p>
    );
  }

  return (
    <section className="surface-kraft border-y border-kraft-deep section-compact">
      <div className="container-narrow text-center">
        <h2 className="font-display text-2xl text-bark">Online ordering coming soon</h2>
        <p className="mt-3 text-prose">
          For now, reach out to order directly or join the list above to hear when
          new batches are ready.
        </p>
        <ButtonLink to="/contact" variant="secondary" className="mt-6">
          Contact us to order
        </ButtonLink>
      </div>
    </section>
  );
}
