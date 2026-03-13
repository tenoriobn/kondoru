import ArrowDownIcon from 'public/icons/arrow-down.svg';
import type { PaginationProps } from './pagination.type';
import { usePagination } from './usePagination';

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const { visiblePages, canGoPrev, canGoNext, goPrev, goNext, goTo } = usePagination({
    page,
    totalPages,
    onChange,
  });

  return (
    <nav aria-label="Paginação de imóveis" className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={goPrev}
        disabled={!canGoPrev}
        className="cursor-pointer w-12 h-12 rounded-full bg-gray-200 text-dark-slate-900 flex items-center justify-center disabled:opacity-40"
      >
        <ArrowDownIcon className="w-3 stroke-3 rotate-90" />
      </button>

      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => goTo(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`cursor-pointer w-12 h-12 rounded-full font-semibold transition-all duration-300 ease-in-out 
          ${p === page ? 'bg-dark-slate-900 text-white' : 'bg-gray-200 text-dark-slate-900 hover:bg-gray-300 active:scale-90'}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={goNext}
        disabled={!canGoNext}
        className="cursor-pointer w-12 h-12 rounded-full bg-gray-200 text-dark-slate-900 flex items-center justify-center transition-all duration-300 ease-in-out disabled:opacity-40"
      >
        <ArrowDownIcon className="w-3 stroke-3 -rotate-90" />
      </button>
    </nav>
  );
}
