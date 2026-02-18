"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function SocialLinksCard() {
  return (
    <Card className="w-full h-fit max-w-sm overflow-hidden shadow-lg mt-5">
      <CardHeader>
        <h2 className="font-heading text-xl tracking-tight lg:text-2xl text-center">
          Connect
        </h2>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 pb-8">
        <div className="flex items-center justify-center gap-4">
          {SocialLinks.map((item, ind) => (
            <CustomTooltip icon={item.icon} text={item.username} key={ind}>
              <Link
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                  }),
                  "h-12 w-12 p-2 rounded-full"
                )}
              >
                <item.icon className="h-7 w-7" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Reach out via LinkedIn, email, or GitHub
        </p>
      </CardContent>
    </Card>
  );
}
