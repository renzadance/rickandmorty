import { useSuspenseQuery } from "@tanstack/react-query";
import { charactersList } from "./api-character";

export function useCharacterList(
  name: string,
  page: number,
  filters: { status?: string; species?: string; gender?: string },
) {
  const { data } = useSuspenseQuery({
    ...charactersList.getCharactersListQueryOptions(name, page, filters),
  });

  return data;
}
