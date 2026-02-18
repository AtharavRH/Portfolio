import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { BlogInterface } from "@/config/blogs";
import { formatDateFromObj } from "@/lib/utils";

interface BlogCardProps {
  blog: BlogInterface;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      <div className="relative w-full h-[200px] flex-shrink-0">
        <Image
          className="rounded-lg border border-border object-cover"
          src={blog.thumbnail}
          alt={blog.title}
          fill
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <div>
          <time className="text-xs text-muted-foreground">
            {formatDateFromObj(blog.publishedDate)}
          </time>
          <h5 className="text-lg font-bold tracking-tight text-foreground line-clamp-2">
            {blog.title}
          </h5>
        </div>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {blog.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={blog.category} />
        </div>
        <Link href={`/blog/${blog.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full sm:w-auto">
            Read Article
            <Icons.externalLink className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
