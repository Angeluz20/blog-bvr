import TitlePage from "@/components/titlePage/page";
import Image from "next/image";
import LakeBVR from "../../../public/assets/pexel3.jpg";
import Paisagem from "../../../public/assets/pexel.jpg";
import { motion } from "framer-motion";
import Button from "@/components/buttonGeneric/page";

export default function Tourism() {
    return (
        <div className="flex flex-col min-h-screen mt-20">
            <header className="relative w-full bg-background h-[36rem]">
                <div className="absolute inset-0 h-full">
                    <Image
                        src={LakeBVR}
                        alt="background-bvr"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="absolute inset-0 h-full bg-[#082831] bg-opacity-70"></div>

                <div className="relative z-10 flex w-full h-full items-center justify-center text-white px-6">
                    <div className="flex w-full lg:w-2/3 flex-col items-center text-center">
                        <TitlePage
                            title="Descubra os Encantos dos Pontos Turísticos de Nossa Cidade!"
                            colorTitle={false}
                            description="Prepare-se para uma jornada inesquecível pelos lugares mais deslumbrantes e fascinantes que a nossa cidade tem a oferecer. Se você é apaixonado por história, natureza ou cultura, aqui é o seu destino perfeito. Explore monumentos históricos que contam as ricas histórias do passado, caminhe por trilhas que revelam paisagens naturais de tirar o fôlego, e mergulhe em uma cultura vibrante que se manifesta em cada esquina."
                        />
                    </div>
                </div>
            </header>
            <div className="flex flex-col flex-grow w-full items-center">
                <main className="flex flex-grow w-full flex-col justify-center items-center">
                    <section className="flex flex-wrap gap-16 justify-center items-center m-8 w-full max-w-7xl">
                        {/* Conteúdo da seção */}
                        <div className="flex flex-col lg:flex-row w-full h-auto p-4">
                            <Image src={Paisagem} alt="paisagem" className="w-full lg:w-2/4 h-auto object-cover" />
                            <div className="flex flex-col w-full justify-between lg:w-2/4 shadow-md bg-white p-4">
                                <div>
                                    <h2 className="text-xl text-gray-800">Pontos Turísticos</h2>
                                    <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nostrum earum ad ut obcaecati nesciunt facilis dolore ab incidunt consectetur possimus excepturi nemo quaerat, vitae quam dolor! Ad, vel sint.</p>

                                </div>
                                <div className="mt-4">
                                    <Button title="saiba mais" linkRoute={"/"} />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
