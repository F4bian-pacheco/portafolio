import BlurFade from "@/components/magicui/blur-fade";
import IconCloud from "@/components/magicui/icon-cloud";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <Button asChild className="mb-4 relative z-10">
        <Link href={`/`}>← Regresar</Link>
      </Button>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-3xl mb-8 text-center tracking-tighter">Blog</h1>
      </BlurFade>
      <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="group block mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 transition-all duration-300 ease-in-out hover:pb-6"
              href={`/blog/${post.slug}`}
            >
              <div className="flex justify-between items-baseline">
                <p className="tracking-tight text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {post.metadata.title}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400 transition-transform duration-300 transform group-hover:translate-x-2">
                  <MoveRight size={20} />
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 transition-opacity duration-300 opacity-70 group-hover:opacity-100">
                {post.metadata.publishedAt}
              </p>
              <div className="w-0 group-hover:w-full h-0.5 bg-black dark:bg-white mt-4 transition-all duration-300 ease-out"></div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
