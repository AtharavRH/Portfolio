import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import BlogCard from "@/components/blogs/blog-card";
import { pagesConfig } from "@/config/pages";
import { blogs } from "@/config/blogs";

export const metadata: Metadata = {
  title: pagesConfig.blog.metadata.title,
  description: pagesConfig.blog.metadata.description,
};

export default function BlogPage() {
  return (
    <PageContainer
      title={pagesConfig.blog.title}
      description={pagesConfig.blog.description}
    >
      <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </PageContainer>
  );
}
