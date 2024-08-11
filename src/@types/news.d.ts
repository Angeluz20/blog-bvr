import { StaticImageData } from "next/image";

export interface NewsProps {
  id: string;
  title: string;
  date: string;
  description?: string;
  isDescription?: boolean;
  poster: StaticImageData;
}