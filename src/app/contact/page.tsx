import { HeaderText } from "@/components/molecules/HeaderText";
import Contact from "@/components/pages/contact/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-8 md:px-20 py-16 md:py-6">
      <HeaderText title="CONTACT" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Contact />
      </div>
    </main>
  );
}
