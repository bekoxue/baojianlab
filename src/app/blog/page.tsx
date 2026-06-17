import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "博客",
  description: "我的学习笔记、技术探索和思考记录。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-2xl px-6 pt-16 pb-20">
      <h1 className="text-2xl font-medium text-near-black">博客</h1>
      <p className="mt-3 text-sm text-stone">
        学习笔记、技术探索和思考记录
      </p>
      <div className="mt-4 h-[3px] w-10 rounded-full bg-ink" />

      <ul className="mt-12 space-y-0">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-6 border-b border-dashed border-sand/80 hover:border-sand transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-[15px] font-medium text-ink group-hover:text-ink-light transition-colors">
                  {post.title}
                </h2>
                <span className="text-xs text-stone ml-4 whitespace-nowrap">
                  {post.date}
                </span>
              </div>
              <p className="mt-2 text-sm text-olive leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-3 text-xs text-stone bg-sand/40 px-2 py-0.5 rounded">
                {post.tag}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
