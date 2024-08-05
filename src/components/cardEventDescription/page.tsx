import React from "react";
import Image from "next/image";
import { IEventProps } from "@/utils/types/events";

export default function CardDescription({ title, poster, description }: IEventProps) {
  return (
    <div className="w-3/4 flex h-96 mb-32">
      <div className="w-full shadow flex justify-between rounded-md bg-white h-full p-5 mb-10">
        <div className="relative w-2/3 h-full rounded-md overflow-hidden">
          <Image
            src={poster}
            alt="poster"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col w-2/3 text-gray-500 text-sm p-5">
          <div className="flex mb-5">
            <p className="text-3xl text-black"><strong>{title}</strong></p>
          </div>
          <div className="w-full flex flex-col">
            <p className="text-justify text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
