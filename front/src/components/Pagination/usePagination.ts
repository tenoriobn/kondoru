import { useMemo } from 'react';
import type { UsePaginationParams } from './pagination.type';

export function usePagination({ page, totalPages, maxVisible = 3, onChange }: UsePaginationParams) {
  const visiblePages = useMemo(() => {
    const pages: number[] = [];

    const half = Math.floor(maxVisible / 2);

    let start = page - half;
    let end = page + half;

    if (start < 1) {
      start = 1;
      end = Math.min(maxVisible, totalPages);
    }

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(totalPages - maxVisible + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }, [page, totalPages, maxVisible]);

  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  function goPrev() {
    if (canGoPrev) onChange(page - 1);
  }

  function goNext() {
    if (canGoNext) onChange(page + 1);
  }

  function goTo(p: number) {
    onChange(p);
  }

  return {
    visiblePages,
    canGoPrev,
    canGoNext,
    goPrev,
    goNext,
    goTo,
  };
}
