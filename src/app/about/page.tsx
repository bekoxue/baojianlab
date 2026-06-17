import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description: "关于宝坚和这个网站。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-16 pb-20">
      <h1 className="text-2xl font-medium text-near-black">关于我</h1>
      <div className="mt-4 h-[3px] w-10 rounded-full bg-ink" />

      <div className="mt-12 space-y-6 text-[15px] text-olive leading-relaxed">
        <p>
          你好，我是宝坚。
        </p>
        <p>
          我对 AI 和技术充满好奇，正在通过动手做项目来学习编程和产品开发。
          我相信最好的学习方式是 <em className="text-near-black not-italic font-medium">边做边学</em>，
          所以这个网站既是我的作品展示，也是我的学习记录。
        </p>
        <p>
          目前我在探索的方向包括：
        </p>
        <ul className="list-none space-y-3 pl-0">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
            <span>AI 工具的实际应用，特别是用 AI 辅助开发</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
            <span>iOS App 开发</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
            <span>Web 全栈开发</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
            <span>GEO（生成式引擎优化）</span>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <section className="mt-16 pt-10 border-t border-sand/60">
        <h2 className="text-lg font-medium text-near-black mb-6">联系方式</h2>
        <div className="space-y-3 text-sm text-olive">
          <p>
            <span className="text-stone">邮箱：</span>
            <a
              href="mailto:baojianxue2024@gmail.com"
              className="text-ink hover:text-ink-light transition-colors underline underline-offset-3 decoration-ink/30 hover:decoration-ink"
            >
              baojianxue2024@gmail.com
            </a>
          </p>
          <p>
            <span className="text-stone">GitHub：</span>
            <a
              href="https://github.com"
              className="text-ink hover:text-ink-light transition-colors underline underline-offset-3 decoration-ink/30 hover:decoration-ink"
            >
              github.com/baojian
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
