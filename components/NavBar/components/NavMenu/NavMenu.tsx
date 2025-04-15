"use client";

import { GradientedLink } from "@/components/GradientedLink";
import { PageLink } from "@/types";
import classNames from "classnames";
import { FC } from "react";

const items = [
  { id: PageLink.AboutUs, header: "about us" },
  { id: PageLink.OurServices, header: "services" },
  { id: PageLink.Cases, header: "cases" },
  { id: PageLink.Contacts, header: "contacts" },
];

interface NavMenuProps {
  open: boolean;
  onClose: () => void;
}

export const NavMenu: FC<NavMenuProps> = ({ open, onClose }) => {
  return (
    <div
      className={classNames(
        "absolute flex flex-col transition-[scale_transform]",
        open ? "right-64 top-4 scale-100 pt-8" : "right-0 top-4 scale-0",
      )}
    >
      {items.map((item) => (
        <GradientedLink key={item.id} href={`#${item.id}`} className="uppercase" onClick={onClose}>
          {`/${item.header}`}
        </GradientedLink>
      ))}
    </div>
  );
};
