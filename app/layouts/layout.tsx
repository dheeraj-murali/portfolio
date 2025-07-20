import { Outlet } from "react-router";
import { Footer } from "~/components/sections/footer";
import { Header } from "~/components/sections/header/header";
import { Toaster } from "~/components/ui/sonner";

const AppLayout = () => {
  return (
    <>
      <main className="container mx-auto my-20 px-4 flex flex-col gap-20">
        <Header />

        <Outlet />

        <Footer />
      </main>
      <Toaster />
    </>
  );
};

export default AppLayout;
