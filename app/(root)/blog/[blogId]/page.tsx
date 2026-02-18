import { redirect } from "next/navigation";

import { blogs } from "@/config/blogs";

interface BlogPageProps {
  params: Promise<{
    blogId: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { blogId } = await params;
  let blog = blogs.find((val) => val.id === blogId);

  if (!blog) {
    redirect("/blog");
  }

  // Redirect to the actual blog link
  redirect(blog.blogLink);
}
