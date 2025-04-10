import { Footer } from "@/components/Footer";
import { MainPageHeader } from "@/components/MainPageHeader";
import { NavBar } from "@/components/NavBar";
import { OurCases } from "@/components/OurCases/OurCases";
import { OurServices } from "@/components/OurServices";
import { WorkPipeline } from "@/components/WorkPipeline";
import { WorkTogether } from "@/components/WorkTogether";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      <NavBar />
      <Image
        alt=""
        src="img/bg-header.svg"
        className="absolute -top-96 left-1/2 w-[2412px] max-w-none translate-x-[-45%]"
        width={2412}
        height={1566}
      />

      <main className="relative z-[1]">
        <MainPageHeader />

        <WorkTogether />

        <OurServices />

        <WorkPipeline />

        <OurCases />

        <Footer />
      </main>
    </div>
  );
}
