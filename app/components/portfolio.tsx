import { buttonVariants } from "~/components/ui/button";
import data from "~/data/portfolio.json";
import { cn } from "~/utils/style";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLinkIcon } from "lucide-react";
import { TechStack } from "./techSatck";

const portfolio = data.portfolio;

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4"
    >
      {portfolio.map((item) => (
        <Card key={item.title} className="w-full h-full">
          <CardHeader>
            <CardTitle>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded-t-md"
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{item.description}</CardDescription>
            <TechStack stack={item.tech} />
          </CardContent>
          <CardFooter>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "link" }))}
            >
              View Project <ExternalLinkIcon className="size-4 mb-1" />
            </a>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};
