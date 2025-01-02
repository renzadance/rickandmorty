import { useSuspenseQuery } from "@tanstack/react-query";
import { episodesList } from "./api-episode";

export function useEpisodeList() {
  const { data } = useSuspenseQuery({
    ...episodesList.getAllEpisodes(),
  });

  return data;
}
