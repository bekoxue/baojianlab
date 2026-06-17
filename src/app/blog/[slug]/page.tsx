import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return { title: meta.title, description: meta.excerpt };
  } catch {
    return { title: "文章未找到" };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-6 pt-16 pb-20">
      <Link
        href="/blog"
        className="text-sm text-stone hover:text-ink transition-colors"
      >
        ← 返回博客
      </Link>

      <header className="mt-8 mb-12">
        <h1 className="text-2xl font-medium leading-snug text-near-black">
          {post.meta.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-stone">
          <time>{post.meta.date}</time>
          {post.meta.tag && (
            <span className="bg-sand/40 px-2 py-0.5 rounded text-xs">
              {post.meta.tag}
            </span>
          )}
        </div>
        <div className="mt-6 h-[3px] w-10 rounded-full bg-ink" />
      </header>

      <article className="prose">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
