import { SeasonCardUi } from "@/components/ui/season-card-ui";
import clsx from "clsx";
import { seasonsList } from "./seasons-list";

export function Seasons({ animation }: { animation?: string }) {
  return (
    <div className={clsx(animation ?? "", "w-full h-full px-36 py-24")}>
      <div className="flex flex-wrap gap-20 justify-center">
        {seasonsList.map((season) => {
          return (
            <div key={season.id} className="w-[27%] flex justify-center">
              <SeasonCardUi
                numSeason={season.name}
                description={season.description}
                img={season.img}
                alt={season.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
