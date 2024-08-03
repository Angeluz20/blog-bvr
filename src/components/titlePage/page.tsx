import React from "react";

type TitleProps = {
    title: string;
    subtitle: string;
}

export default function TitlePage({ title, subtitle}: TitleProps){
    return(
        <>
            <h1 className="text-2xl text-[#092932]">
                <strong>{title}</strong>
            </h1>
            <h3 className="text-gray-400">{subtitle}</h3>
        </>
    )
}