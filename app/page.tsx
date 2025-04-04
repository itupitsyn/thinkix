import { MainPageHeader } from "@/components/MainPageHeader";
import { NavBar } from "@/components/NavBar";
import { OurServices } from "@/components/OurServices";
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

      <main className="relative z-[1] mx-auto min-w-[300px] max-w-[1920px] px-10">
        <MainPageHeader />

        <WorkTogether />

        <OurServices />

        {/* <div className="mt-10 flex min-h-[40rem] flex-col items-start justify-center gap-32 py-16 sm:px-16">
          <h2 className="text-3xl">We automate your business with AI</h2>
          <OrderModal />
        </div>

        <ServicesBlock /> */}
      </main>
    </div>
  );
}
