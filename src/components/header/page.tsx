"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoBVR from "../../../public/assets/logo-bvr.png";
import TitleLogo from "../../../public/assets/titlebvr.png";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const NavLink = ({ name, route, onClick, style }: any) => (
  <Link
    href={route}
    className={style}
    aria-label={`Navigate to ${name}`}
    onClick={onClick}
  >
    {name}
  </Link>
);

const Navigation = ({ pages, isMenuOpen, closeMenu }: any) => (
  <>
    <nav className="hidden text-white xl:flex justify-around">
      {pages.map((item: any) => (
        <NavLink
          key={item.name}
          name={item.name}
          route={item.route}
          onClick={closeMenu}
          style={"px-5 py-3 hover:h-12 hover:bg-[#195262] hover:rounded-md"}
        />
      ))}
    </nav>

    <div
      className={`${isMenuOpen ? "flex" : "hidden"} w-2/4 absolute top-20 h-screen left-0 bg-background shadow-2xl flex-col items-center z-50 xl:hidden`}
    >
      {pages.map((item: any) => (
        <NavLink
          key={item.name}
          name={item.name}
          route={item.route}
          onClick={closeMenu}
          style={"px-5 py-3 flex items-center justify-center w-full h-16 hover:bg-gray-300"}
        />
      ))}
    </div>
  </>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerPagesName = [
    { name: "Início", route: "/" },
    { name: "Notícias", route: "/News" },
    { name: "Eventos", route: "/PageEvents" },
    { name: "Turismo", route: "/Tourism" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(`Menu toggled: ${isMenuOpen}`);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex shadow-2xl items-center justify-between p-8 h-20 w-full bg-gradient-to-r from-[#092932] to-[#0B495A] z-50">
      <div className="flex items-center">
        <Image src={LogoBVR} alt={"Logo"} className="w-16" />
        <Image src={TitleLogo} alt={"Title"} className="w-30" />
      </div>

      {/* Botão de Menu Hamburguer */}
      <button
        className="xl:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      <Navigation
        pages={headerPagesName}
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />
    </header>
  );
}
