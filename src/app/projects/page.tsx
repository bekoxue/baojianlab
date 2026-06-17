import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目",
  description: "我的项目作品集。",
};

const projects = [
  {
    title: "长截图 App",
    description:
      "一个 iPhone 截图自动拼接工具。先用 Python 完成了核心算法验证，正在开发 iOS 原生版本。支持自动检测重叠区域并无缝拼接。",
    tech: ["Swift", "iOS", "图像处理", "Python"],
    status: "开发中",
  },
  {
    title: "车咖 GEO 系统",
    description:
      "GEO（Generative Engine Optimization）优化分析平台。帮助分析和优化内容在 AI 搜索引擎中的表现。已部署到火山引擎云服务器。",
    tech: ["Python", "FastAPI", "云部署"],
    status: "已上线",
  },
  {
    title: "个人网站",
    description:
      "你正在看的这个网站。基于 Next.js 15 搭建，采用 Kami 设计系统的暖色调风格，部署在 Vercel 上。",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "已上线",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-16 pb-20">
      <h1 className="text-2xl font-medium text-near-black">项目</h1>
      <p className="mt-3 text-sm text-stone">
        把想法变成现实的过程
      </p>
      <div className="mt-4 h-[3px] w-10 rounded-full bg-ink" />

      <div className="mt-12 space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-sand/80 bg-surface p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] font-medium text-near-black">
                {project.title}
              </h2>
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  project.status === "已上线"
                    ? "bg-ink/10 text-ink"
                    : "bg-sand/60 text-stone"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-olive leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-stone bg-sand/40 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
