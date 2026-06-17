import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { FadeIn, FadeInStagger, FadeInItem, HoverScale } from "@/components/motion";

const featuredProjects = [
  {
    title: "MindJournal",
    description: "AI 驱动的智能日记，写下今天，读懂自己",
    tech: "Next.js · Claude AI · Supabase",
    href: "https://mindjournal.baojianlab.com",
    external: true,
  },
  {
    title: "长截图 App",
    description: "iPhone 截图自动拼接工具",
    tech: "Swift · iOS · 图像处理",
    href: "/projects",
  },
  {
    title: "车咖 GEO 系统",
    description: "GEO 优化分析平台",
    tech: "Python · FastAPI · 云部署",
    href: "/projects",
  },
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-2xl px-6">
      {/* Hero */}
      <section className="pt-20 pb-16">
        <FadeIn>
          <h1 className="text-3xl font-medium leading-snug text-near-black">
            你好，我是宝坚
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-5 text-base leading-relaxed text-olive max-w-lg">
            一个对 AI 充满好奇的探索者，正在用代码把想法变成现实。
            <br />
            这里记录我的学习、思考和作品。
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-6 h-[3px] w-10 rounded-full bg-ink" />
        </FadeIn>
      </section>

      {/* Recent Posts */}
      <section className="pb-16">
        <FadeIn delay={0.35}>
          <h2 className="text-lg font-medium text-near-black mb-8">近期文章</h2>
        </FadeIn>
        <FadeInStagger>
          <ul className="space-y-0">
            {recentPosts.map((post) => (
              <FadeInItem key={post.slug}>
                <li>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-baseline justify-between py-4 border-b border-dashed border-sand/80 hover:border-sand transition-colors"
                  >
                    <span className="text-[15px] font-medium text-ink group-hover:text-ink-light transition-colors">
                      {post.title}
                    </span>
                    <span className="text-xs text-stone ml-4 whitespace-nowrap">
                      {post.date}
                    </span>
                  </Link>
                </li>
              </FadeInItem>
            ))}
          </ul>
        </FadeInStagger>
        <FadeIn delay={0.6}>
          <Link
            href="/blog"
            className="inline-block mt-6 text-sm text-stone hover:text-ink transition-colors"
          >
            查看全部文章 →
          </Link>
        </FadeIn>
      </section>

      {/* Featured Projects */}
      <section className="pb-20">
        <FadeIn delay={0.5}>
          <h2 className="text-lg font-medium text-near-black mb-8">精选项目</h2>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredProjects.map((project) => {
            const CardContent = (
              <>
                <h3 className="text-[15px] font-medium text-near-black group-hover:text-ink transition-colors">
                  {project.title}
                  {project.external && <span className="ml-1 text-xs text-stone">↗</span>}
                </h3>
                <p className="mt-2 text-sm text-olive">{project.description}</p>
                <p className="mt-3 text-xs text-stone">{project.tech}</p>
              </>
            );
            return (
              <FadeInItem key={project.title}>
                <HoverScale>
                  {project.external ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-lg border border-sand/80 bg-surface p-5 hover:border-sand transition-colors"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <Link
                      href={project.href}
                      className="group block rounded-lg border border-sand/80 bg-surface p-5 hover:border-sand transition-colors"
                    >
                      {CardContent}
                    </Link>
                  )}
                </HoverScale>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>
    </div>
  );
}
