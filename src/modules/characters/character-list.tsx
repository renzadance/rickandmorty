import clsx from "clsx";
import { characterDto } from "./api-character";
import Image from "next/image";

export function CharacterList({ data }: { data: characterDto[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-3xl mt-5 font-bold">not results</div>
    );
  }

  return (
    <div className="flex justify-center flex-wrap gap-10 mt-10">
      {data?.map((character) => (
        <div
          key={character.id}
          className="flex h-[250px] w-[560px] rounded-xl overflow-hidden shadow-md bg-customGray"
        >
          <Image
            src={character.image}
            alt={character.name}
            width={230}
            height={250}
          />

          <div className="flex flex-col p-4">
            <h2 className="text-2xl font-bold">{character.name}</h2>
            <p className="flex items-center gap-2 font-medium">
              <span
                className={clsx(
                  "w-2 h-2 rounded-full",
                  character.status === "Alive"
                    ? "bg-green-500"
                    : character.status === "Dead"
                      ? "bg-red-500"
                      : "bg-gray-500",
                )}
              ></span>
              {character.status} – {character.species} – {character.gender}
            </p>

            <span className="mt-4">
              <h3 className="text-gray-400">First seen in:</h3>
              <p className="text-lg font-medium">{character.origin.name}</p>
            </span>

            <span className="mt-4">
              <h3 className="text-gray-400">Last known location:</h3>
              <p className="text-lg font-medium">{character.location.name}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
