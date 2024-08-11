"use client";
import Image from "next/image";
import TitlePage from "@/components/titlePage/page";
import ExampleNoticie from "../../../public/assets/festa.jpeg";
import LetreiroPoster from "../../../public/assets/bvr-letreiro.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardDescriptionPage from "@/components/cardEventDescription/page";
import Button from "@/components/buttonGeneric/page";

const eventsData = [
    { id: "1", title: "Aniversário da Cidade" },
    { id: "2", title: "Festival Folclórico" },
    { id: "3", title: "Festa de São Sebastião" },
    { id: "4", title: "Feira de Artesanato e Gastronomia" },
    { id: "5", title: "Corrida de Canoas Tradicional" },
    { id: "6", title: "Outros Eventos" },
];

export default function Events() {
    return (
        <div>
            <div className="flex flex-col w-full h-2/3 items-center mt-20">
                <section className="relative w-full bg-background h-96 ">
                    {/* Imagem de fundo */}
                    <div className="absolute inset-0 h-full">
                        <Image
                            src={LetreiroPoster}
                            alt="background-bvr"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="absolute inset-0 h-full bg-[#092932] bg-opacity-80"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 text-white">
                        <CardDescriptionPage
                            title={"Uma Celebração da Cultura e Tradição"}
                            description="Ao longo do ano, a cidade se transforma em um cenário de celebrações que atraem tanto moradores quanto visitantes, proporcionando uma experiência singular de imersão nas tradições amazônicas."
                        />

                    </div>
                </section>
                <div className="flex w flex-col items-center p-8 flex-grow">
                    <TitlePage
                        title="Eventos"
                        subtitle=""
                        description=""
                    />
                </div>
                <div className="w-3/4 flex h-full mb-20 ">
                    <Swiper
                        className="w-full h-full"
                        spaceBetween={40} 
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                            fill: "row" 
                        }}
                    >
                        {eventsData.map((event) => (
                            <SwiperSlide
                                key={event.id}
                                className="flex flex-col rounded-md shadow-xl"
                            >
                                <div className="w-full h-3/4 cursor-pointer overflow-hidden rounded-t-md">
                                    <Image
                                        src={ExampleNoticie}
                                        className="w-full h-full object-cover rounded-t-md hover:scale-110 transition-transform duration-500 shadow-2xl"
                                        alt={`Event ${event.title}`}
                                    />
                                </div>
                                <div className="w-full h-1/4 flex flex-col justify-between bg-white rounded-b-md p-2">
                                    <h1 className="text-center text-lg font-semibold text-green_dark">
                                        <strong>{event.title}</strong>
                                    </h1>
                                    <Button
                                        title={"Detalhes"}
                                        linkRoute={""}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div >
    );
}
