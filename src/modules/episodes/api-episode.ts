import { jsonApiInstance } from "@/shared/api/api-instance";
import { queryOptions } from "@tanstack/react-query";

export type episodeDto = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  gender: string;
  url: string;
  created: string;
};

export const episodesList = {
  baseKey: "episode",
  getAllEpisodes: () => {
    return queryOptions({
      queryKey: [episodesList.baseKey, "allEpisodes"],
      queryFn: async () => {
        const firstPage = await jsonApiInstance<{
          info: { pages: number };
          results: episodeDto[];
        }>("episode/?page=1");

        const totalPages = firstPage.info.pages;

        const requests = Array.from({ length: totalPages }, (_, index) =>
          jsonApiInstance<{ results: episodeDto[] }>(
            `episode/?page=${index + 1}`,
          ),
        );

        const allPages = await Promise.all(requests);
        const allEpisodes = allPages.flatMap((page) => page.results);

        return allEpisodes;
      },
    });
  },
};
