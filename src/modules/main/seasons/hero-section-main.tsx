import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { DropDownIcon } from "../icons/drop-down-icon";

export function HeroSectionMain({
  onButtonClickScroll,
}: {
  onButtonClickScroll: () => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative w-full h-[850px] bg-hero-section-background-main bg-cover bg-center flex items-end p-11">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 1%, transparent)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      <div className="relative w-[800px]">
        <h1 className="text-white text-5xl font-bold">
          Welcome to Rick and Morty
        </h1>
        <p className="text-white text-lg mt-4">
          Embark on the wildest interdimensional adventures! Explore bizarre
          planets, meet quirky characters, and dive into the chaos of infinite
          realities. Are you ready to join the smartest man in the universe and
          his naive grandson?
        </p>
        <div className="flex gap-5 items-center mt-4">
          <span className="font-bold text-gray-400">IMDb 9,1</span>
          <span className="font-bold text-gray-400">2013</span>
          <span className="bg-neutral-800 font-bold p-1">16+</span>
        </div>
        <div className="flex gap-4 items-center mt-3">
          <span className="font-bold text-white">Animation</span>
          <div className="text-slate-300 text-xl">•</div>

          <span className="font-bold text-white">Adventure</span>
          <div className="text-slate-300 text-xl">•</div>

          <span className="font-bold text-white">Comedy</span>
          <div className="text-slate-300 text-xl">•</div>

          <span className="font-bold text-white">Science Fiction</span>
        </div>
        <Link href="/episodes">
          <button className="mt-14 px-8 py-3 border-2 border-cyan-500 text-white rounded-lg text-xl font-bold hover:bg-cyan-400 transition-colors">
            Explore Episodes
          </button>
        </Link>
      </div>
      <div>
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={onButtonClickScroll}
          className="relative flex flex-col justify-center items-center"
        >
          <span className="text-2xl font-medium text-white/80">TO SEASONS</span>
          <DropDownIcon
            className={clsx("transition", isOpen ? "translate-y-3" : "")}
          />
        </button>
      </div>
    </div>
  );
}
