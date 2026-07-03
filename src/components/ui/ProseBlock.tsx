import type { ReactNode } from "react";

interface ProseBlockProps {
  children: ReactNode;
  className?: string;
}

export function ProseBlock({ children, className = "" }: ProseBlockProps) {
  return (
    <div className={`space-y-4 text-prose leading-relaxed ${className}`}>
      {children}
    </div>
  );
}
