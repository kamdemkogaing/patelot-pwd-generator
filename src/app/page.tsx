import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";
import Header from "../components/Header";
import { Spacing } from "../components/Spacing";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <PasswordGenerator />
      <Spacing />
      <Footer />
    </main>
  );
}
