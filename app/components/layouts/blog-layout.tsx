import { Article } from "~/components/article";
import { Footer } from "~/components/sections/footer";
import { Header } from "~/components/sections/header";

export const BlogLayout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <main className="container mx-auto my-20 flex flex-col gap-40">
      <Header />
      <Article>{children}</Article>
      <Footer />
    </main>
  );
};
