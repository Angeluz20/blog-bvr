import Image from "next/image";
import React from "react";
import ExampleNoticie from "../../../../public/assets/example-noticie.jpeg";
import TitlePage from "@/components/titlePage/page";
import { newsData } from "../page";

export default function DetailsNews({ params }: { params: { id: string } }) {
    const id = params.id;
    console.log(id);

    const data = newsData.find(news => news.id === id);
    console.log(data);

    return (
        <div className="flex flex-col p-8 items-center mt-10">
            <div className="w-2/5 flex items-center flex-col">
                <TitlePage title={data?.title as string} subtitle={""} />
                <Image src={ExampleNoticie} className="w-full mt-8" alt="poster" />
            </div>

            <div className="w-2/5 mt-10">
                <p>{id}</p>
                <p>{data?.date}</p>
                <p className="text-justify">
                    {data?.description}
                </p>
            </div>
        </div>
    )
}