import Link from "next/link";
import React from "react";

type BtnProps = {
  title: string;
  linkRoute: string;
};

export default function Button({ title, linkRoute }: BtnProps) {
  return (
    <div className="flex justify-center mt-2">
      <Link
        href={linkRoute}
        className="relative flex items-center justify-center h-12 w-full overflow-hidden rounded-md border-none text-white bg-gradient-to-r from-[#195262] to-[#2C6C7D] shadow-2xl transition-all hover:text-white mt-2"
      >
        <span className="relative z-10">{title}</span>
        <span className="absolute inset-0 bg-[#2C797D] opacity-0 transition-all duration-500 hover:opacity-100"></span>
      </Link>
    </div>
  )
}