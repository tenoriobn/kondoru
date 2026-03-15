export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export interface UsePaginationParams {
  page: number;
  totalPages: number;
  maxVisible?: number;
  onChange: (page: number) => void;
}
