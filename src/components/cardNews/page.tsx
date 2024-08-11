import React from "react";
import Image from "next/image";
import { NewsProps } from "../../@types/news";
import Button from "../buttonGeneric/page";
import { motion } from "framer-motion"
export default function CardNews({
  id,
  title,
  date,
  poster,
  description,
  isDescription,
}: NewsProps) {
  return (
    <motion.div
      initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { delay: .02 },
        },
      }}
      key={id}
      className="flex shadow-xl items-center h-auto w-96 justify-between bg-white flex-col p-2 rounded-md transition-transform transform hover:scale-105"
    >
      <Image src={poster} className="flex w-full rounded-md" alt="poster" />
      <div className="flex flex-col justify-between w-full text-gray-500 text-sm">
        <div className="flex items-start mt-2 justify-between flex-col">
          <p className="text-xl p-2 text-black"><strong>{title}</strong></p>
          <p className="p-2">Data: {date}</p>
        </div>
        <div className="w-full flex flex-col overflow-hidden text-ellipsis whitespace-nowrap">
          {isDescription && (
            <p className="text-justify box-border p-2">
              {description}
            </p>
          )}
          <Button
            title="Acessar conteúdo"
            linkRoute={`/News/${id}`}
          />
        </div>
      </div>
    </motion.div>
  );
}
