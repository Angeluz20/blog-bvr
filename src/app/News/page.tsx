"use client";
import React, { useMemo, useState } from "react";
import TitlePage from "@/components/titlePage/page";
import { NewsProps } from "../../@types/news";
import { CiSearch } from "react-icons/ci";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaRunning, FaPalette, FaTheaterMasks } from "react-icons/fa"; 
import CardNews from "@/components/cardNews/page";
import { newsData } from "@/service/api";

export default function News() {
    const [searchItem, setSearchItem] = useState("");

    const filteredNews = useMemo(() => {
        const data = newsData.filter((news) =>
            news.title.toLowerCase().includes(searchItem.toLowerCase())
        );
        return data.sort((a, b) => a.title.localeCompare(b.title));
    }, [searchItem]);

    // Array de categorias com ícones
    const category = [
        { id: "1", title: "Saúde", icon: <MdOutlineHealthAndSafety size={30} color="#083344" /> },
        { id: "2", title: "Esporte", icon: <FaRunning size={30} color="#083344" /> },
        { id: "3", title: "Cultura", icon: <FaPalette size={30} color="#083344" /> },
        { id: "4", title: "Diversas", icon: <FaTheaterMasks size={30} color="#083344" /> },
    ];

    return (
        <div className="flex flex-col min-h-screen mb-4 mt-20">
            <div className="flex flex-col flex-grow w-full items-center">
                <header className="mb-4 flex flex-col w-full bg-[#e8ecec] items-center">
                    <TitlePage title="Notícias" subtitle="Explore as notícias da cidade" />
                    <div className="flex xl:w-2/3 items-center justify-center xl:flex-row flex-col mb-10 w-full">
                        <div className="flex shadow p-1 items-center justify-center rounded-xl w-2/3 max-w-lg bg-background mb-4">
                            <CiSearch size={35} className="text-gray-500 m-2" />
                            <input
                                type="text"
                                value={searchItem}
                                onChange={(e) => setSearchItem(e.target.value)}
                                className="outline-none rounded-xl bg-background w-full h-12"
                                placeholder="Pesquisar..."
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center w-full max-w-2xl gap-4 mb-8">
                        {category.map((item) => (
                            <div
                                key={item.id}
                                className="flex cursor-pointer flex-col w-20 h-20 sm:w-32 sm:h-32 hover:border-1 hover:border-[#0d9488] shadow-xl bg-background rounded-2xl justify-center items-center transition-transform transform hover:scale-105"
                            >
                                {item.icon}
                                <p className="text-[#083344] text-center text-sm sm:text-base">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </header>

                <main className="flex flex-grow w-full flex-col justify-center items-center">
                    <section className="flex flex-wrap gap-16 justify-center items-center mt-8 w-full max-w-7xl">
                        {filteredNews.length > 0 ? (
                            filteredNews.map(({ id, title, date, poster }: NewsProps) => (
                                <CardNews
                                    key={id}
                                    title={title}
                                    date={date}
                                    poster={poster}
                                    description="Fill your designs with placeholders in a click: text, images and even data! Generate 'Lorem ipsum' to fill your text layers,Fill any shape with the perfect ..."
                                    isDescription={true}
                                    id={id}
                                />
                            ))
                        ) : (
                            <div className="flex justify-center items-center h-full">
                                <p className="text-lg text-gray-500">Nenhum resultado encontrado</p>
                            </div>
                        )}
                    </section>

                </main>
            </div>
        </div>
    );
}
