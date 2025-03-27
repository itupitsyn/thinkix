import { DarkThemeToggle, Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";
import { MainPageHeader } from "@/components/MainPageHeader";
import { OrderModal } from "@/components/OrderModal";
import { ServicesBlock } from "@/components/ServicesBlock";

export default function Home() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      <div className=" absolute -right-12 top-0 z-[-1] size-[1000px] rounded-full bg-[#be3ff7]/30 blur-[200px]" />
      <div className=" absolute left-0 top-96 z-[-1] size-[1000px] rounded-full bg-[#5794ed]/30 blur-[250px]" />
      <Navbar className="bg-inherit dark:bg-inherit">
        <NavbarCollapse />

        <NavbarCollapse>
          <NavbarLink className="flex h-full items-center" href="#">
            Products
          </NavbarLink>
          <NavbarLink className="flex h-full items-center" href="#">
            Solutions/Cases
          </NavbarLink>
          <NavbarLink className="flex h-full items-center" href="#">
            Contacts
          </NavbarLink>
          <DarkThemeToggle />
        </NavbarCollapse>
      </Navbar>

      <main className="container pb-20">
        <MainPageHeader />

        <div className="mt-10 flex min-h-[40rem] flex-col items-start justify-center gap-32 py-16 sm:px-16">
          <h2 className="text-3xl">We automate your business with AI</h2>
          <OrderModal />
        </div>

        <ServicesBlock />
      </main>
    </div>
  );
}
