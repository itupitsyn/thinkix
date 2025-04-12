"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface CaseProps {
  id: number;
  header: string;
}

export const Case: FC<CaseProps> = ({ id, header }) => {
  const [colored, setColored] = useState(false);

  useEffect(() => {
    const tmt = setTimeout(() => setColored(false), 50);

    return () => {
      clearTimeout(tmt);
    };
  }, [colored]);

  return (
    <Link
      href={`/case/${id}`}
      className={classNames("group block transition-colors duration-500", colored && "bg-white/5 duration-0")}
      onMouseEnter={() => {
        setColored(true);
      }}
      onMouseLeave={() => {
        setColored(true);
      }}
    >
      <div className="relative transition-transform duration-500 group-hover:-translate-y-1/3">
        <Image
          alt=""
          src={`/img/case-${id}.png`}
          width={430}
          height={480}
          className="h-[430px] w-auto grayscale-[50%] transition-[filter] duration-500 group-hover:grayscale-0"
        />
        <h3 className="absolute left-0 top-0 flex size-full items-center px-10 text-center font-helvetica-now-regular text-[40px] uppercase leading-none">
          {header}
        </h3>
      </div>
    </Link>
  );
};
