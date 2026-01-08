import { ExternalLinkIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { TechStack } from "~/components/techStack";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardAction,
} from "~/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ScrollArea } from "~/components/ui/scrollArea";

type PortfolioCardProps = {
  title: string;
  client?: string;
  image: string;
  description: string[];
  tech: string[];
  year?: string;
  link?: string;
};

export const PortfolioCard = ({
  title,
  client,
  image,
  description,
  tech,
  year,
  link,
}: PortfolioCardProps) => (
  <Card key={title} className="w-full h-full flex flex-col justify-between">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <img src={image} alt={title} className="size-12 rounded object-fill" />
        <h3 className="text-lg font-bold">{title}</h3>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="line-clamp-3">
        {description[0]}
      </CardDescription>
      <TechStack stack={tech} />
    </CardContent>
    <CardFooter className="flex justify-end">
      <Dialog>
        <DialogTrigger>
          <Button variant="outline">Read More</Button>
        </DialogTrigger>
        <DialogContent className="p-10 flex flex-col gap-10 max-w-3xl!">
          <div className="flex flex-row items-end gap-2">
            <img
              src={image}
              alt={title}
              className="size-12 rounded object-fill"
            />
            <div className="flex flex-col gap-0">
              <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
              <DialogDescription>{client}</DialogDescription>
            </div>
          </div>
          <ScrollArea className="h-full max-h-[calc(100vh-24rem)] flex flex-col gap-4">
            {description.map((desc, index) => (
              <p key={index} className="mt-4">
                {desc}
              </p>
            ))}
          </ScrollArea>
          <TechStack stack={tech} />
          <DialogFooter>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "link" }))}
              >
                Visit client <ExternalLinkIcon className="size-4 mb-0.5" />
              </a>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
);
