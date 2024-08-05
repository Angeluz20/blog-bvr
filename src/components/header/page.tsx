import React from "react";
import Image from "next/image";
import LogoBVR from "../../../public/assets/logo-bvr.png";
import TitleLogo from "../../../public/assets/titlebvr.png";
import Link from "next/link";

const NavLink = ({ name, route }: any) => (
  <Link
    key={name}
    href={route}
    className="text-white px-5 py-3 hover:h-12 hover:bg-[#195262] hover:rounded-md"
    aria-label={`Navigate to ${name}`}
  >
    {name}
  </Link>
);

const Navigation = ({ pages }: any) => (
  <nav className="flex justify-around">
    {pages.map((item: any) => (
      <NavLink key={item.name} name={item.name} route={item.route} />
    ))}
  </nav>
);

export default function Header() {
  const headerPagesName = [
    { name: "Início", route: "/" },
    { name: "Notícias", route: "/News" },
    { name: "Eventos", route: "/PageEvents" },
    { name: "Obras", route: "/obras" },
    { name: "Turismo", route: "/turismo" },
  ];

  return (
    <header className="flex shadow-2xl items-center justify-between p-8 h-20 w-full bg-gradient-to-r from-[#092932] to-[#0B495A]">
      <div className="flex">
        <Image src={LogoBVR} alt={"Logo"} className="w-16" />
        <Image src={TitleLogo} alt={"Title"} className="w-30" />
      </div>
      <Navigation pages={headerPagesName} />
    </header>
  );
}
