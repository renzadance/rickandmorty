import clsx from "clsx";
import { useState } from "react";
import { DropdownIcon } from "./icons/dropdown-icon";

export type Filters = {
  status?: string;
  species?: string;
  gender?: string;
};

export const Dropdown = ({
  children,
  options,
  onFilterObj,
  filterType,
  filterChange,
  setFilterChange,
}: {
  children: string;
  options: { id: string; label: string }[];
  onFilterObj: (filters: Filters) => void;
  filterType: keyof Filters;
  filterChange: Filters;
  setFilterChange: React.Dispatch<React.SetStateAction<Filters>>;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionChange = (id: string, filterType: keyof Filters) => {
    setFilterChange((prev) => {
      const newFilters = { ...prev, [filterType]: id }; // Обновляем только тот фильтр, который изменился
      onFilterObj(newFilters); // Передаем обновленные фильтры
      console.log("Selected filters:", newFilters);
      return newFilters; // Возвращаем обновленное состояние
    });
  };

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={clsx(
          "inline-flex items-center gap-2 relative rounded-lg border border-gray-300/20 bg-black px-4 py-3 text-center text-base font-medium shadow-sm transition-all disabled:cursor-not-allowed",
          isOpen ? "bg-gray-100 text-black" : "",
        )}
      >
        {children}
        <DropdownIcon
          className={isOpen ? "rotate-180 transition-all" : "transition-all"}
        />
      </div>
      <div className="absolute">
        {isOpen && (
          <div className="p-1 bg-white/90 rounded-lg text-black mt-2">
            {options.map((option) => (
              <CharacterOption
                key={option.id}
                id={option.id}
                isChecked={filterChange[filterType] === option.id} // Сравниваем с текущим фильтром для типа
                onChange={() => handleOptionChange(option.id, filterType)} // Передаем нужный фильтр в обработчик
              >
                {option.label}
              </CharacterOption>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function CharacterOption({
  children,
  id,
  isChecked,
  onChange,
}: {
  children: string;
  id: string;
  isChecked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
      <label className="flex items-center cursor-pointer relative">
        <input
          type="radio"
          id={id}
          checked={isChecked}
          onChange={onChange}
          className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label htmlFor={id} className="flex w-full space-x-2 text-sm text-black">
        {children}
      </label>
    </div>
  );
}
