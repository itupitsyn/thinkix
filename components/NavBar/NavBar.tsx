"use client";

import { FC, useState } from "react";
import { GradientedButton } from "../GradientedButton";
import { NavMenu } from "./components";

export const NavBar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="app-container relative z-50 flex justify-end px-10 pt-12">
      <GradientedButton className="uppercase" onClick={() => setOpen((prev) => !prev)}>
        /menu
      </GradientedButton>
      <NavMenu open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};
