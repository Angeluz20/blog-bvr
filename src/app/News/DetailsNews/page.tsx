import Header from "@/components/header/page";
import Image from "next/image";
import React from "react";
import ExampleNoticie from "../../../../public/assets/example-noticie.jpeg";
import TitlePage from "@/components/titlePage/page";

export default function DetailsNews(){
    return(
        <div>
            <Header/>
            <div className="flex flex-col p-8 items-center mt-10">
                <div className="w-2/5 flex items-center flex-col">
                    <TitlePage title={"Reconstrução da frente da cidade"} subtitle={""} />              
                    <Image src={ExampleNoticie} className="w-full mt-8" alt="poster"/>
                </div>

                <div className="w-2/5 mt-10">
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, purus et vulputate gravida, mauris velit finibus metus, sed interdum metus nunc vel nisi. Nulla facilisi. Donec et justo vel ipsum scelerisque sollicitudin. Sed sit amet velit a justo malesuada consectetur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, purus et vulputate gravida, mauris velit finibus metus, sed interdum metus nunc vel nisi. Nulla facilisi. Donec et justo vel ipsum scelerisque sollicitudin. Sed sit amet velit a justo malesuada consectetur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, purus et vulputate gravida, mauris velit finibus metus, sed interdum metus nunc vel nisi. Nulla facilisi. Donec et justo vel ipsum scelerisque sollicitudin. Sed sit amet velit a justo malesuada consectetur.

                    </p>
                </div>
            </div>
        </div>
    )
}