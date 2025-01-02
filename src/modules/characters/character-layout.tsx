import { useState } from "react";
import { CharacterHeroSection } from "./character-hero-section";
import { Dropdown, Filters } from "./dropdown";
import { Search } from "./search";
import { PaginationCharacters } from "./pagination-characters";
import { CharacterList } from "./character-list";
import { useCharacterList } from "./use-character-list";
import { DeleteFilters } from "./icons/delete-filters";
import { Logo } from "@/components/logo";

export function CharacterLayout() {
  const [isPage, setIsPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterChange, setFilterChange] = useState<Filters>({
    status: "",
    species: "",
    gender: "",
  });

  const data = useCharacterList(searchQuery, isPage, filterChange);

  const handleFilterChange = (filters: Filters) => {
    setFilterChange(filters);
  };

  return (
    <>
      <Logo />

      <CharacterHeroSection />

      <div className="w-full h-full px-10 py-24">
        <div className="w-full px-6 flex items-center gap-4">
          <Search
            setSearchQuery={setSearchQuery}
            setIsPage={setIsPage}
            searchQuery={searchQuery}
          />

          <Dropdown
            options={[
              { id: "", label: "no options" },
              { id: "alive", label: "Alive" },
              { id: "unknown", label: "unknown" },
              { id: "dead", label: "Dead" },
            ]}
            onFilterObj={handleFilterChange}
            filterType="status"
            filterChange={filterChange}
            setFilterChange={setFilterChange}
          >
            status
          </Dropdown>

          <Dropdown
            options={[
              { id: "", label: "no options" },
              { id: "human", label: "Human" },
              { id: "alien", label: "Alien" },
              { id: "humanoid", label: "Humanoid" },
              { id: "unknown", label: "unknown" },
              { id: "poopybutthole", label: "Poopybutthole" },
              {
                id: "mythological-creature",
                label: "Mythological Creature",
              },
              { id: "animal", label: "Animal" },
              { id: "robot", label: "Robot" },
              { id: "cronenberg", label: "Cronenberg" },
              { id: "disease", label: "Disease" },
            ]}
            onFilterObj={handleFilterChange}
            filterType="species"
            filterChange={filterChange}
            setFilterChange={setFilterChange}
          >
            species
          </Dropdown>

          <Dropdown
            options={[
              { id: "", label: "no options" },
              { id: "male", label: "Male" },
              { id: "female", label: "Female" },
              { id: "unknown", label: "unknown" },
              { id: "genderless", label: "Genderless" },
            ]}
            onFilterObj={handleFilterChange}
            filterType="gender"
            filterChange={filterChange}
            setFilterChange={setFilterChange}
          >
            gender
          </Dropdown>

          <button
            className="rounded-full w-10 h-10 flex justify-center items-center hover:bg-neutral-800 transition-colors"
            onClick={() => {
              setIsPage(1);
              setSearchQuery("");
              setFilterChange({
                status: "",
                species: "",
                gender: "",
              });
            }}
          >
            <DeleteFilters />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <PaginationCharacters
            currentPage={isPage}
            setCurrentPage={setIsPage}
            totalPages={+data.info.pages}
          />
        </div>

        <CharacterList data={data.results} />
      </div>
    </>
  );
}
