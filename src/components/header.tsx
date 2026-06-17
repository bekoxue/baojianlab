"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-sand/60">
      <div className="mx-auto max-w-2xl px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-medium tracking-wide text-ink"
        >
          宝坚实验室
        </Link>
        <nav className="flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-ink font-medium"
                  : "text-stone hover:text-near-black"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
