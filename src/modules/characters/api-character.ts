import { jsonApiInstance } from "@/shared/api/api-instance";
import { queryOptions } from "@tanstack/react-query";

export type characterDto = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export const charactersList = {
  baseKey: "character",
  getCharactersListQueryOptions: (
    name: string,
    page: number,
    filters: { status?: string; species?: string; gender?: string },
  ) => {
    return queryOptions({
      queryKey: [
        charactersList.baseKey,
        "caharacterBySearch",
        page,
        name,
        filters,
      ],
      queryFn: (meta) => {
        return jsonApiInstance<{
          info: { pages: number[] };
          results: characterDto[];
        }>(
          `character/?page=${page}&name=${name}&status=${filters.status}&species=${filters.species}&gender=${filters.gender}`,
          {
            signal: meta.signal,
          },
        );
      },
    });
  },
};
