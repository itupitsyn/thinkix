import { fontIntegralCfDemi } from "@/fonts";
import { PageLink } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const linkTexts: Partial<Record<PageLink, string>> = {
  [PageLink.AboutUs]: "about us",
  [PageLink.Cases]: "cases",
  [PageLink.Home]: "home",
  [PageLink.OurServices]: "our services",
  [PageLink.WorkPipeline]: "work pipeline",
};

export const Footer = () => {
  return (
    <div id={PageLink.Contacts} className="flex items-end justify-between pb-20 pt-28 lg:pt-64">
      <div className="pb-8 pl-4">
        {Object.entries(linkTexts).map(([id, header], idx) => (
          <Fragment key={id}>
            {idx > 0 && <span className="inline-block w-12"> </span>}
            <span>
              <Link
                href={`#${id}`}
                className={classNames(
                  "whitespace-nowrap bg-fuchsia-to-blue-65 bg-clip-text text-2xl uppercase leading-none text-transparent lg:text-5xl xl:text-[90px]",
                  fontIntegralCfDemi.className,
                )}
              >
                {header}
              </Link>
              <span className="ml-3 text-xl">/0{idx + 1}</span>
            </span>
          </Fragment>
        ))}
      </div>

      <Image src="/img/element-footer.png" width={297} height={424} alt="" className="h-[200px] w-auto flex-none lg:h-[424px]" />
    </div>
  );
};
