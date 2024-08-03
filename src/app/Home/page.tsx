import React from "react";
import Image from "next/image";
import BackgroundBVR from "../../../public/assets/background-bvr.png";
import LogoBVR from "../../../public/assets/logo-bvr-big.png";
import CardNoticies from "@/components/cardNoticies/page";
import TitlePage from "@/components/titlePage/page";
import ExampleNoticie from "../../../public/assets/example-noticie.jpeg";
import { NewsProps } from "@/types/news";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  const recentNews: NewsProps[] = [
    { title: "Título 1", date: "20/08/2024", route: "/News/DetailsNews", poster: ExampleNoticie },
    { title: "Título 2", date: "20/08/2024", route: "/News/DetailsNews", poster: ExampleNoticie },
    { title: "Título 3", date: "20/08/2024", route: "/News/DetailsNews", poster: ExampleNoticie },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#092932] to-[#0B495A] h-80">
        <div className="absolute inset-0">
          <Image src={BackgroundBVR} alt="background-bvr" layout="fill" objectFit="cover" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 text-white">
          <Image src={LogoBVR} alt="logo-bvr" className="w-44 mb-4" />
          <h3 className="text-lg mb-2">Bem-vindo(a) ao portal</h3>
          <h1 className="text-4xl font-bold">BOAVISTENSE</h1>
        </div>
        <div className="absolute bottom-0 w-full h-4 bg-yellow-400"></div>
      </section>

      {/* Welcome Section */}
      <section className="flex flex-col items-center p-8 mt-8 mb-10">
        <TitlePage title="Descubra Nossa Cultura: Acompanhe Notícias e Eventos" subtitle="" />
        <p className="w-3/5 text-center mt-4">
          Aqui você terá a oportunidade de conhecer melhor nossa cidade, acompanhar as últimas notícias e eventos locais, e explorar um pouco da rica cultura que nos define. Descubra tudo o que faz da nossa cidade um lugar especial e vibrante!
        </p>
      </section>

      {/* Recent News Section */}
      <section className="flex flex-col items-center p-8 mb-10 flex-grow">
        <TitlePage title="Notícias recentes" subtitle="Explore as notícias mais recentes do município" />
        <div className="flex flex-wrap gap-10 justify-center mt-8 w-full max-w-7xl">
          {recentNews.map(({ id, title, date, route, poster }) => (
            <CardNoticies
              key={id}
              title={title}
              date={date}
              route={route}
              poster={poster}
            />
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="flex flex-col items-center p-8 mb-10">
        <TitlePage title="Acompanhe também pelas nossas redes sociais" subtitle="" />
        <h3 className="text-lg mt-4">Siga-nos nas redes sociais para mais atualizações!</h3>
        <div className="flex flex-row gap-6 mt-4">
          <FaInstagram size={40} color="gray" className="cursor-pointer transition-transform transform hover:scale-105" />
          <FaFacebook size={40} color="gray" className="cursor-pointer transition-transform transform hover:scale-105" />
        </div>
      </section>
    </div>
  );
}
