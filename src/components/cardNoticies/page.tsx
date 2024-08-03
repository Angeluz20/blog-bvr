import React from "react";
import Image from "next/image";
import { NewsProps } from "@/types/news";

export default function CardNoticies({ id, title, date, route, poster, description, isDescription }: NewsProps) {
//  const handlerAccessNewsDetails = (id : string) => {
//     push(`/News/DetailsNews/${id}`)
// };


  return (
    <div
      key={id}
      className={`flex shadow-xl items-center ${isDescription ? 'h-auto' : 'h-96'} w-96 justify-between flex-col p-2 rounded-md transition-transform transform hover:scale-105`}
    >
      <Image src={poster} className="flex w-full rounded-md" alt="poster" />
      <div className="flex flex-col justify-between w-full text-gray-500 text-sm">
        <div className="flex items-center justify-between">
          <p className="text-xl text-black"><strong>{title}</strong></p>
          <p className="p-2">Data: {date}</p>  
        </div>
        <div className="w-full flex flex-col">
          {isDescription && (
            <p className="text-justify box-border p-2">
              {description}
            </p>
          )}
 
          <a 
            href={route} 
            className="relative flex items-center justify-center h-12 w-full overflow-hidden rounded-md border-none text-white bg-gradient-to-r from-[#195262] to-[#2C6C7D] shadow-2xl transition-all hover:text-white mt-2"
          >
            <span className="relative z-10">Acessar conteúdo</span>
            <span className="absolute inset-0 bg-[#2C797D] opacity-0 transition-all duration-500 hover:opacity-100"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
