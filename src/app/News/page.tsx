import React from "react";
import TitlePage from "@/components/titlePage/page";
import ExampleNoticie from "../../../public/assets/example-noticie.jpeg";
import { NewsProps } from "@/utils/types/news";
import CardNews from "@/components/cardNews/page";

export const newsData: NewsProps[] = [
    { id: "1", title: "Nova Parceria Anunciada", date: "05/08/2024", poster: ExampleNoticie, description: "A empresa anunciou uma nova parceria estratégica com a Tech Innovators." },
    { id: "2", title: "Lançamento de Produto", date: "12/08/2024", poster: ExampleNoticie, description: "O novo produto promete revolucionar o mercado com suas funcionalidades avançadas." },
    { id: "3", title: "Conferência de Tecnologia", date: "18/08/2024", poster: ExampleNoticie, description: "A conferência anual de tecnologia atraiu milhares de participantes de todo o mundo." },
    { id: "4", title: "Prêmios de Inovação", date: "22/08/2024", poster: ExampleNoticie, description: "Nossa empresa recebeu vários prêmios por suas inovações no setor de tecnologia." },
    { id: "5", title: "Expansão Internacional", date: "25/08/2024", poster: ExampleNoticie, description: "Estamos expandindo nossas operações para novos mercados na Ásia e Europa." },
    { id: "6", title: "Nova Filial Aberta", date: "28/08/2024", poster: ExampleNoticie, description: "Uma nova filial foi aberta em São Paulo, aumentando nossa presença no Brasil." },
    { id: "7", title: "Campanha de Marketing", date: "30/08/2024", poster: ExampleNoticie, description: "Lançamos uma campanha de marketing inovadora que está atraindo muita atenção." },
    { id: "8", title: "Relatório Anual de Sustentabilidade", date: "02/09/2024", poster: ExampleNoticie, description: "O relatório deste ano destaca nossos esforços contínuos para a sustentabilidade." },
];


export default function News() {
    return (
        <div>
            <main className="flex flex-col p-8">
                <div className="mb-4 flex items-center flex-col">
                    <TitlePage title={"Notícias"} subtitle={"Explore as notícias da cidade"} />
                </div>
                <div className="flex items-center justify-center p-10">
                    <div className="grid grid-cols-4 gap-20 justify-between w-full flex -mx-4">
                        {newsData.map(({ id, title, date, poster }: NewsProps) => (
                            <CardNews
                                key={id}
                                title={title}
                                date={date}
                                poster={poster}
                                description={"Fill your designs with placeholders in a click: text, images and even data! Generate 'Lorem ipsum' to fill your text layers,Fill any shape with the perfect ..."}
                                isDescription={true}
                                idDetails={id}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
