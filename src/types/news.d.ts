import { StaticImageData } from "next/image";

export interface NewsProps {
    id?: string | undefined;
    title: string;
    date: string;
    route: string;
    description?: string;
    isDescription?: boolean;
    poster: StaticImageData;
  }