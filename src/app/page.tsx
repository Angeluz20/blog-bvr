import HomePage from "../app/Home/page"
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main>
        <Header />
        <HomePage />
        <Footer />
    </main>
  );
}
