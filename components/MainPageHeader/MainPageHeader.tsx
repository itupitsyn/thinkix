import Image from "next/image";
import { OrderModal } from "../OrderModal";
import { PageLink } from "@/types";

export const MainPageHeader = () => {
  return (
    <div id={PageLink.Home} className="app-container">
      <div className="flex min-h-[900px] flex-col justify-center">
        <Image priority width={949} height={158} alt="logo" src="img/logo.svg" />

        <div className="ml-[352px] flex gap-20 font-integralcf-demibold text-[200px] leading-[100px] tracking-[-6px]">
          <span>AI</span>
          <span>LAB</span>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <OrderModal />
        <div className="text-lg uppercase">Automate Your Business with AI: Unlock Efficiency and Growth</div>
      </div>
    </div>
  );
};
