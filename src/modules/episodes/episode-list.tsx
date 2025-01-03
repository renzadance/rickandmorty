import { episodeDto } from "./api-episode";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function EpisodeList({ data }: { data: episodeDto[] }) {
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

  return (
    <div>
      {seasonsList.map((season) => (
        <div className="mb-5" key={season}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`season-${season}`}>
              <AccordionTrigger className="text-xl">
                SEASON {season}
              </AccordionTrigger>
              {episodesBySeason[season].map((episode) => (
                <div key={episode.id}>
                  <AccordionContent>
                    EP{episode.id} ꟷ {episode.name}
                  </AccordionContent>
                </div>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
