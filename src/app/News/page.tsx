import React from "react";
import Header from "@/components/header/page";
import TitlePage from "@/components/titlePage/page";
import Image from "next/image";
import ExampleNoticie from "../../../public/assets/example-noticie.jpeg";
import { NewsProps } from "@/types/news";
import CardNoticies from "@/components/cardNoticies/page";

const newsData: NewsProps[] = [
    { title: "Título 1", date: "20/08/2024", route: "/", poster: ExampleNoticie },
    { title: "Título 2", date: "21/08/2024", route: "/", poster: ExampleNoticie },
    { title: "Título 3", date: "22/08/2024", route: "/", poster: ExampleNoticie },
    { title: "Título 4", date: "20/08/2024",route: "/", poster:ExampleNoticie },
    { title: "Título 5", date: "20/08/2024",route: "/", poster:ExampleNoticie },
    { title: "Título 6", date: "20/08/2024",route: "/", poster:ExampleNoticie },
    { title: "Título 7", date: "20/08/2024",route: "/", poster:ExampleNoticie },
    { title: "Título 8", date: "20/08/2024",route: "/", poster:ExampleNoticie },
];

export default function News() {
    return (
        <div>
            <Header />
            <main className="flex flex-col p-12">
                <div className="mb-4 flex items-center flex-col">
                    <TitlePage title={"Notícias"} subtitle={"Explore as notícias da cidade"} />
                </div>
                <div className="flex items-center justify-center p-16">
                    <div className="grid grid-cols-4 gap-20 justify-between w-full flex -mx-2">
                        {newsData.map(({ id, title, date, route, poster }: NewsProps) => (
                            <CardNoticies
                                key={id}
                                title={title}
                                date={date}
                                route={route}
                                poster={poster}
                                description={"Fill your designs with placeholders in a click: text, images and even data! Generate 'Lorem ipsum' to fill your text layers,Fill any shape with the perfect ..."}
                                isDescription={true}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
