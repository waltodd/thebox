import Image from "next/image";
import Service from "@/components/Service";
import AboutUs from "@/components/AboutUs";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <AboutUs /> */}
      <Service />
    </main>
  );
}
