import Image from "next/image";
import React from "react";
import ExampleNoticie from "../../../../public/assets/example-noticie.jpeg";
import TitlePage from "@/components/titlePage/page";
import { newsData } from "@/service/api";

interface DetailsNewsProps {
  params: {
    id: string;
  };
}

export default function DetailsNews({ params }: DetailsNewsProps) {
  const { id } = params;

  // Verifica se existe uma notícia correspondente ao ID
  const data = newsData.find((news) => news.id === id);

  if (!data) {
    return (
      <div className="flex flex-col p-8 items-center">
        <TitlePage title="Notícia não encontrada" subtitle="" />
        <p className="mt-4 text-gray-500">A notícia que você está procurando não existe.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-8 items-center mt-20">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <TitlePage title={data.title} subtitle="" />
        <Image
          src={ExampleNoticie}
          className="w-full mt-8 rounded-lg"
          alt="poster da notícia"
          priority
          quality={85}
          layout="responsive"
        />
      </div>

      <div className="w-full max-w-3xl mt-10">
        <p className="text-sm text-gray-600">{data.date}</p>
        <p className="text-justify mt-4 leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
}
