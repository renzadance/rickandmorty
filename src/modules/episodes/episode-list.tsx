import { useState } from "react";
import { episodeDto } from "./api-episode";

export function EpisodeList({ data }: { data: episodeDto[] }) {
  const [isOpenSeason, setIsOpenSeason] = useState<Record<string, boolean>>({});

  const episodesBySeason = data.reduce(
    (acc: Record<string, episodeDto[]>, episode) => {
      const season = episode.episode.slice(2, 3); // "S01" из "S01E01"
      if (!acc[season]) {
        acc[season] = [];
      }
      acc[season].push(episode);
      return acc;
    },
    {},
  );

  const seasonsList = Object.keys(episodesBySeason);

  const handleOpenSeason = (season: string) => {
    setIsOpenSeason((prev) => ({
      ...prev,
      [season]: !prev[season],
    }));
  };

  return (
    <div>
      {seasonsList.map((season) => (
        <div className="mb-5" key={season}>
          <button
            onClick={() => handleOpenSeason(season)}
            className="bg-neutral-900 p-5 w-96"
          >
            <h2 className="text-white/60 text-3xl font-bold">
              SEASON {season}
            </h2>
          </button>
          {isOpenSeason[season] && (
            <ul>
              {episodesBySeason[season].map((episode) => (
                <div key={episode.id}>
                  <p>
                    {episode.id} - {episode.name}
                  </p>
                </div>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
