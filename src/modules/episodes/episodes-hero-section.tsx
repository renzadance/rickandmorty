import NumberTicker from "@/components/ui/number-ticker";

export function EpisodesHeroSection() {
  return (
    <div className="relative w-full h-[850px] bg-hero-section-background-episodes bg-cover bg-center flex items-end p-11">
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
          Explore the Adventures of Rick and Morty
        </h1>

        <p className="text-white text-lg mt-4">
          Dive into the multiverse of Rick and Morty! Browse through all
          episodes, relive your favorite moments, and uncover the chaos behind
          every portal.
        </p>

        <div className="flex gap-4 mt-4">
          <span className="text-neutral-400 text-sm bg-neutral-900 font-bold p-2 rounded">
            <NumberTicker className="text-neutral-400 text-sm" value={51} />{" "}
            Episodes
          </span>
          <span className="text-neutral-400 text-sm bg-neutral-900 font-bold p-2 rounded">
            <NumberTicker className="text-neutral-400 text-sm" value={5} />{" "}
            Seasons
          </span>
          <span className="text-neutral-400 text-sm bg-neutral-900 font-bold p-2 rounded">
            Multiverse Adventures
          </span>
        </div>
      </div>
    </div>
  );
}
