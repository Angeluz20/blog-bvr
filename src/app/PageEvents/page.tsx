"use client";
import Image from "next/image";
import TitlePage from "@/components/titlePage/page";
import ExampleNoticie from "../../../public/assets/festa.jpeg";
import LetreiroPoster from "../../../public/assets/bvr-letreiro.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardDescription from "@/components/cardEventDescription/page";
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
            <div className="flex flex-col w-full h-full items-center">
                <div className="flex flex-col items-center p-8 flex-grow">
                    <TitlePage
                        title="Cronograma Anual de Eventos"
                        subtitle="Acompanhe o cronograma dos principais eventos da nossa vida"
                        description=""
                    />
                </div>
                <CardDescription
                    description="Ao longo do ano, a cidade se transforma em um cenário de celebrações que atraem tanto moradores quanto visitantes, proporcionando uma experiência singular de imersão nas tradições amazônicas."
                    title="Boa Vista do Ramos: Celebrações que Envolvem e Encantam"
                    poster={LetreiroPoster}
                />
                <div className="w-3/4 flex h-full mb-20">
                    <Swiper
                        className="w-full h-full"
                        spaceBetween={50}
                        slidesPerView={3}
                    >
                        {eventsData.map((event) => (
                            <SwiperSlide key={event.id} className="flex flex-col rounded-md shadow-xl">
                                <div className="w-full h-3/4 cursor-pointer overflow-hidden rounded-t-md">
                                    <Image
                                        src={ExampleNoticie}
                                        className="w-full h-full object-cover rounded-t-md hover:scale-110 transition-transform duration-500 shadow-2xl"
                                        alt={`Event ${event.title}`}
                                    />
                                </div>
                                <div className="w-full h-1/4 flex flex-col justify-between bg-white rounded-b-md p-2">
                                    <h1 className="text-center text-lg font-semibold text-green_dark"><strong>{event.title}</strong></h1>
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
        </div>
    );
}
