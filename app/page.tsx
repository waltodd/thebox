import Image from "next/image";
import Service from "@/components/Service";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Ads from "@/components/Ads";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <AboutUs /> */}
      
      <Service />
      <Ads />
      <CTA />
      <Footer />
    </main>
  );
}
