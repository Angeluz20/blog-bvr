import React from "react";

type TitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
  colorTitle?: boolean;
}

export default function TitlePage({ title, subtitle, description, colorTitle = true }: TitleProps) {
  return (
    <div className="flex flex-col items-center py-6 justify-center w-full mt-10">
      <h1 className={`text-4xl ${colorTitle ? "text-[#092932]" : "text-white"} text-center`}>
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
