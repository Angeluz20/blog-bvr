import React from "react";
import Image from "next/image";
import { NewsProps } from "@/utils/types/news";
import Button from "../buttonGeneric/page";

export default function CardNews({
  id,
  title,
  date,
  poster,
  description,
  isDescription,
  idDetails = "" }: NewsProps) {
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
          <Button
            title="Acessar conteúdo"
            linkRoute={`/News/${idDetails}`}
          />
        </div>
      </div>
    </div>
  );
}
