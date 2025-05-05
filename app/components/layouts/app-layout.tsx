import { Footer } from "~/components/sections/footer";
import { Header } from "~/components/sections/header";
import { Toaster } from "~/components/ui/sonner";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto my-20 flex flex-col gap-40">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </main>
  );
};
