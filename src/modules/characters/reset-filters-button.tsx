import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DeleteFilters } from "./icons/delete-filters";

export function ResetFiltersButton({ onClick }: { onClick: () => void }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span
            className="rounded-full w-10 h-10 flex justify-center items-center hover:bg-neutral-800 transition-colors"
            onClick={onClick}
          >
            <DeleteFilters />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>reset filters</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
