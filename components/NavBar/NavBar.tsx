"use client";

import { FC, useEffect, useState } from "react";
import { GradientedButton } from "../GradientedButton";
import { NavMenu } from "./components";
import { PageLink } from "@/types";
import { usePathname, useRouter } from "next/navigation";

export const NavBar: FC = () => {
  const { replace } = useRouter();
  const path = usePathname();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const offset = window.pageYOffset;
      const ids = Object.values(PageLink);

      for (let i = 0; i < ids.length; i += 1) {
        const el = document.getElementById(ids[i]);
        if (!(el instanceof HTMLElement)) continue;

        if (el.offsetTop > offset) {
          replace(`${path}#${ids[i]}`, { scroll: false });
          break;
        }
      }
    };

    document.addEventListener("scrollend", handler);

    return () => {
      document.removeEventListener("scrollend", handler);
    };
  }, [path, replace]);

  return (
    <nav className="relative z-50 flex justify-end px-10 pt-12">
      <GradientedButton className="uppercase" onClick={() => setOpen((prev) => !prev)}>
        /menu
      </GradientedButton>
      <NavMenu open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};
