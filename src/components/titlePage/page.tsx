import React from "react";

type TitleProps = {
  title: string;
  subtitle: string;
  description?: string;
}

export default function TitlePage({ title, subtitle, description }: TitleProps) {
  return (
    <div className="flex flex-col items-center p-6 w-full">
      <h1 className="text-2xl text-[#092932]">
        <strong>{title}</strong>
      </h1>
      <h3 className="text-gray-400">{subtitle}</h3>
      <p className="w-3/5 text-center">{description}</p>
    </div>
  )
}