import Link from "next/link";
import { ArrowIcon } from "./Icons";

export function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`text-xs font-bold uppercase tracking-[0.14em] md:text-sm ${dark ? "text-muted-dark" : "text-muted"}`}>
      {children}
    </span>
  );
}

export function Heading({ children, as: Tag = "h2", className = "" }: { children: React.ReactNode; as?: "h1" | "h2" | "h3"; className?: string }) {
  return <Tag className={`font-display font-normal uppercase leading-none ${className}`}>{children}</Tag>;
}

type BtnProps = { href: string; children: React.ReactNode; variant?: "accent" | "outline" | "outline-light" | "dark"; arrow?: boolean; className?: string; external?: boolean };

export function ButtonLink({ href, children, variant = "outline", arrow = false, className = "", external = false }: BtnProps) {
  const styles = {
    accent: "bg-accent text-ink font-bold",
    dark: "bg-ink text-cream font-semibold",
    outline: "border-[1.5px] border-ink font-semibold",
    "outline-light": "border-[1.5px] border-cream text-cream font-semibold",
  }[variant];
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 transition-opacity hover:opacity-85 ${styles} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
