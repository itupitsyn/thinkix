"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import styles from "./Case.module.css";
import { fontHelveticaNow } from "@/fonts";

interface CaseProps {
  id: number;
  header: string;
}

export const Case: FC<CaseProps> = ({ id, header }) => {
  return (
    <Link href={`/case/${id}`} className={classNames("group block", styles.blink, styles["blink-reverse"])}>
      <div className="relative transition-transform duration-500 group-hover:-translate-y-1/3">
        <Image
          alt=""
          src={`/img/case-${id}.png`}
          width={430}
          height={480}
          className="h-[430px] w-auto grayscale-[50%] transition-[filter] duration-500 group-hover:grayscale-0"
        />
        <h3
          className={classNames(
            "absolute left-0 top-0 flex size-full items-center px-10 text-center text-[40px] uppercase leading-none",
            fontHelveticaNow.className,
          )}
        >
          {header}
        </h3>
      </div>
    </Link>
  );
};
