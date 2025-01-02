import React from "react";

export function Search({
  searchQuery,
  setSearchQuery,
  setIsPage,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <form>
      <div className="group relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsPage(1);
          }}
          className="block rounded-md px-10 py-3 w-96
          border border-gray-300/20 shadow-sm transition-all
                focus:bg-zinc-950
                disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="Quick search..."
        />
        <button className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
