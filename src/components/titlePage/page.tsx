import React from "react";

type TitleProps = {
  title: string;
  subtitle: string;
  description?: string;
}

export default function TitlePage({ title, subtitle, description }: TitleProps) {
  return (
    <div className="flex flex-col items-center py-6 justify-center w-full mt-10">
      <h1 className="text-3xl text-[#092932] text-center">
        <strong>{title}</strong>
      </h1>
      <h3 className="text-gray-400">{subtitle}</h3>
      {description && (
        <p className="w-full mt-4 text-md text-justify lg:text-center">
          {description}
        </p>
      )}
    </div>
  );
}
