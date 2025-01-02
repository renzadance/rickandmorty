import clsx from "clsx";
import React from "react";
import { PaginationPrevIcon } from "./icons/pagination-prev-icon";
import { PaginationNextIcon } from "./icons/pagionation-next-icon";

export function PaginationCharacters({
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const pageRange: number = 11;
  let startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  let endPage = startPage + pageRange - 1;

  if (!totalPages) {
    return;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pageRange + 1); // Сдвигаем начало диапазона влево
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-wrap items-center">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <PaginationPrevIcon />
      </button>

      <div className="w-[700px] flex justify-center items-center">
        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageClick(1)}
              className="w-10 h-10 mx-1 rounded-full hover:bg-white/10"
            >
              1
            </button>
            <span className="text-gray-500">...</span>
          </>
        )}

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={clsx(
              "w-10 h-10 mx-1 rounded-full hover:bg-white/10",
              currentPage === page ? "bg-white/30" : "",
            )}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            <span className="text-gray-500">...</span>
            <button
              onClick={() => handlePageClick(totalPages)}
              className="w-10 h-10 mx-1 rounded-full hover:bg-white/10"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <PaginationNextIcon />
      </button>
    </div>
  );
}
