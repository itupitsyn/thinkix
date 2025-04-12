import { PageLink } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const linkTexts: Record<PageLink, string> = {
  [PageLink.AboutUs]: "about us",
  [PageLink.Cases]: "cases",
  [PageLink.Home]: "home",
  [PageLink.OurServices]: "our services",
  [PageLink.WorkPipeline]: "work pipeline",
};

export const Footer = () => {
  return (
    <div className="flex items-end justify-between pb-20 pt-64">
      <div className="pb-8">
        {Object.values(PageLink).map((item, idx) => (
          <Fragment key={item}>
            {idx > 0 && <span className="inline-block w-12"> </span>}
            <span>
              <Link
                href={`#${item}`}
                className="whitespace-nowrap bg-fuchsia-to-blue-65 bg-clip-text font-integralcf-demibold text-[90px] uppercase leading-none text-transparent"
              >
                {linkTexts[item]}
              </Link>
              <span className="ml-3 text-xl">/0{idx + 1}</span>
            </span>
          </Fragment>
        ))}
      </div>

      <Image src="/img/element-footer.png" width={297} height={424} alt="" className="h-[424px] w-auto flex-none" />
    </div>
  );
};
