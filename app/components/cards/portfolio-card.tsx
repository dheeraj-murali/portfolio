import { ExternalLinkIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { TechStack } from "~/components/techStack";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";

type PortfolioCardProps = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
};

export const PortfolioCard = ({
  title,
  image,
  description,
  tech,
  link,
}: PortfolioCardProps) => (
  <Card key={title} className="w-full h-full bg-accent shadow-none border-none">
    <CardHeader>
      <CardTitle className="flex items-end gap-2">
        <img
          src={image}
          alt={title}
          className="size-10 rounded object-fill border"
        />
        <h3 className="text-lg font-bold">{title}</h3>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="line-clamp-3">{description}</CardDescription>
      <TechStack stack={tech} />
    </CardContent>
    <CardFooter className="flex justify-end">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ variant: "link" }))}
      >
        View Project <ExternalLinkIcon className="size-4 mb-0.5" />
      </a>
    </CardFooter>
  </Card>
);
