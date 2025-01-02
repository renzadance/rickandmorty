import Image, { ImageProps } from "next/image";
import React from "react";

type TypeSeasonCardProps = {
  numSeason: string;
  description: string;
  img: ImageProps["src"];
  alt: string;
};

export const SeasonCardUi: React.FC<TypeSeasonCardProps> = ({
  numSeason,
  description,
  img,
  alt,
}) => {
  return (
    <div className="w-[350px] h-[500px] rounded-lg overflow-hidden group relative shadow-lg">
      <Image
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-70"
        src={img}
        alt={alt}
        width={350}
        height={600}
      />
      <div className="p-2 absolute bottom-0 left-0 w-full bg-black/70 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-slate-100">{numSeason}</h2>
        <p className="text-lg text-slate-200">{description}</p>
      </div>
    </div>
  );
};
