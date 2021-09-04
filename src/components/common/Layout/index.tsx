import { Footer } from "components/Footer";
import { Header } from "components/Header";

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="mx-auto dark:bg-primary-600">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
