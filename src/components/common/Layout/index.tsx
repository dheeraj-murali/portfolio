import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="dark:bg-primary-600">
      <Header />

      <main className="container mx-auto px-5 lg:px-10">{children}</main>

      <Footer />

      <ToastContainer />
    </div>
  );
}
