"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import BackgroundBVR from "../../../public/assets/background-bvr.png";
import LogoBVR from "../../../public/assets/logo-bvr-big.png";
import CardNews from "@/components/cardNews/page";
import TitlePage from "@/components/titlePage/page";
import { newsData } from "@/service/api";
import { motion } from 'framer-motion';

const SocialMediaSection = () => (
  <section className="flex flex-col items-center p-8 mb-10">
    <TitlePage
      title="Acompanhe também pelas nossas redes sociais"
      subtitle="Siga-nos nas redes sociais para mais atualizações!"
    />
    <div className="flex flex-row gap-6 mt-4">
      <FaInstagram
        size={40}
        color="gray"
        className="cursor-pointer transition-transform transform hover:scale-105"
        aria-label="Instagram"
        title="Instagram"
      />
      <FaFacebook
        size={40}
        color="gray"
        className="cursor-pointer transition-transform transform hover:scale-105"
        aria-label="Facebook"
        title="Facebook"
      />
    </div>
  </section>
);

export default function Home() {
  const recentNews = useMemo(() => newsData.slice(0, 3), [newsData]);

  return (
    <div className="flex flex-col min-h-screen items-center mt-20">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#092932] to-[#0B495A] h-96">
        <div className="absolute inset-0 h-full">
          <Image
            src={BackgroundBVR}
            alt="background-bvr"
            layout="fill"
            objectFit="cover"
            priority
            quality={90}
          />
        </div>

        <motion.div
          initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { delay: .02 },
            },
          }}
          className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 text-white">
          <Image
            src={LogoBVR}
            alt="logo-bvr"
            className="w-44 mb-4"
            priority
            quality={90}
          />
          <h3 className="text-lg mb-2">Bem-vindo(a) ao portal</h3>
          <h1 className="text-4xl font-bold">BOAVISTENSE</h1>
          {/* <div className="flex w-44 border-2 rounded-full h-16 mb-10 mt-5 items-center justify-center  transition-transform transform hover:scale-105 cursor-pointer">
            <button>Histórico</button>
          </div> */}
        </motion.div>
        <div className="absolute bottom-0 w-full h-4 bg-yellow-400"></div>
      </section>

      {/* Welcome Section */}
      <motion.section
        initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: .02 },
          },
        }}
        className="flex w-2/3 border-2 border-gray-200 rounded-xl p-4 mt-16 bg-background items-center justify-center">
        <TitlePage
          title="Descubra Nossa Cultura"
          subtitle="Acompanhe Notícias e Eventos"
          description="Aqui você terá a oportunidade de conhecer melhor nossa cidade, acompanhar as últimas notícias e eventos locais, e explorar um pouco da rica cultura que nos define. Descubra tudo o que faz da nossa cidade um lugar especial e vibrante!"
        />
      </motion.section>

      {/* Recent News Section */}
      <section className="flex flex-col items-center p-8 mb-10 flex-grow">
        <TitlePage
          title="Notícias recentes"
          subtitle="Explore as notícias mais recentes do município"
        />
        <div className="flex flex-wrap gap-10 justify-center mt-8 w-full max-w-7xl">
          {recentNews.length > 0 ? (
            recentNews.map(({ id, title, date, poster }) => (
              <CardNews
                key={id}
                title={title}
                date={date}
                poster={poster}
                id={id}
              />
            ))
          ) : (
            <p className="text-gray-500">Nenhuma notícia recente disponível.</p>
          )}
        </div>
      </section>

      {/* Social Media Section */}
      <SocialMediaSection />
    </div>
  );
}
