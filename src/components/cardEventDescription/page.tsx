import React from "react";
import { IEventProps } from "../../@types/events";

export default function CardDescriptionPage({ title, description }: IEventProps) {
  return (
    <div className="w-full items-center justify-center p-5 flex h-auto md:h-96">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between rounded-xl h-full p-5">
        <div className="flex flex-col md:ml-5 w-full items-center text-white text-sm p-5 rounded-xl">
          <div className="flex mb-5 w-full md:w-3/4">
            <p className="text-2xl md:text-4xl text-white text-center font-bold">
              {title}
            </p>
          </div>
          <div className="flex flex-col w-full md:w-3/4">
            <p className="text-justify text-base md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
