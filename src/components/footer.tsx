import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sand/60">
      <div className="mx-auto max-w-2xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone">
        <p>© {new Date().getFullYear()} 宝坚实验室</p>
        <div className="flex items-center gap-5">
          <Link href="https://github.com" className="hover:text-near-black transition-colors">
            GitHub
          </Link>
          <Link href="https://twitter.com" className="hover:text-near-black transition-colors">
            Twitter
          </Link>
          <Link href="mailto:baojianxue2024@gmail.com" className="hover:text-near-black transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
