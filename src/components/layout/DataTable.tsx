import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../primitives/Button';
import { Checkbox } from '../primitives/Checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../primitives/Select';

export interface Column<T> {
  id: string;
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  pageSize?: number;
  pageSizeOptions?: number[];
  onRowClick?: (row: T) => void;
  sortable?: boolean;
  emptyMessage?: string;
  selectable?: boolean;
  selectedRows?: T[];
  onSelectionChange?: (rows: T[]) => void;
  getRowId?: (row: T) => string;
}

type SortDirection = 'asc' | 'desc' | null;

interface SortState {
  column: string | null;
  direction: SortDirection;
}

function DataTableInner<T>(
  {
    data,
    columns,
    className,
    pageSize = 10,
    pageSizeOptions = [10, 20, 30, 50],
    onRowClick,
    sortable = true,
    emptyMessage = 'No results found.',
    selectable = false,
    selectedRows = [],
    onSelectionChange,
    getRowId = (_row: T, index?: number) => String(index),
  }: DataTableProps<T> & { getRowId?: (row: T, index?: number) => string },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentPageSize, setCurrentPageSize] = React.useState(pageSize);
  const [sort, setSort] = React.useState<SortState>({
    column: null,
    direction: null,
  });

  const sortedData = React.useMemo(() => {
    if (!sort.column || !sort.direction) return data;

    const column = columns.find((c) => c.id === sort.column);
    if (!column?.accessorKey) return data;

    return [...data].sort((a, b) => {
      const aVal = a[column.accessorKey as keyof T];
      const bVal = b[column.accessorKey as keyof T];

      if (aVal === bVal) return 0;
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      const comparison = aVal < bVal ? -1 : 1;
      return sort.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sort, columns]);

  const totalPages = Math.ceil(sortedData.length / currentPageSize);
  const startIndex = (currentPage - 1) * currentPageSize;
  const endIndex = startIndex + currentPageSize;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const handleSort = (columnId: string) => {
    setSort((prev) => {
      if (prev.column !== columnId) {
        return { column: columnId, direction: 'asc' };
      }
      if (prev.direction === 'asc') {
        return { column: columnId, direction: 'desc' };
      }
      return { column: null, direction: null };
    });
  };

  const getSortIcon = (columnId: string) => {
    if (sort.column !== columnId) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    if (sort.direction === 'asc') {
      return <ArrowUp className="ml-2 h-4 w-4" />;
    }
    return <ArrowDown className="ml-2 h-4 w-4" />;
  };

  const isRowSelected = (row: T, index: number) => {
    const rowId = getRowId(row, index);
    return selectedRows.some((r, i) => getRowId(r, i) === rowId);
  };

  const handleSelectRow = (row: T, index: number, checked: boolean) => {
    if (!onSelectionChange) return;

    if (checked) {
      onSelectionChange([...selectedRows, row]);
    } else {
      const rowId = getRowId(row, index);
      onSelectionChange(selectedRows.filter((r, i) => getRowId(r, i) !== rowId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (!onSelectionChange) return;

    if (checked) {
      onSelectionChange([...data]);
    } else {
      onSelectionChange([]);
    }
  };

  const allSelected = data.length > 0 && selectedRows.length === data.length;
  const someSelected = selectedRows.length > 0 && selectedRows.length < data.length;

  return (
    <div ref={ref} className={cn('', className)}>
      <div className="rounded-md border border-gray-200">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {selectable && (
                <th className="h-12 w-12 px-4">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all"
                    ref={someSelected ? (el) => el && ((el as HTMLButtonElement).dataset.state = 'indeterminate') : undefined}
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={cn(
                    'h-12 px-4 text-left align-middle text-xs font-medium uppercase tracking-wider text-gray-500',
                    column.width
                  )}
                >
                  {sortable && column.sortable !== false && column.accessorKey ? (
                    <button
                      className="inline-flex items-center hover:text-gray-900"
                      onClick={() => handleSort(column.id)}
                    >
                      {column.header}
                      {getSortIcon(column.id)}
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="h-24 text-center text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rowIndex) => {
                const actualIndex = startIndex + rowIndex;
                return (
                  <tr
                    key={actualIndex}
                    className={cn(
                      'transition-colors hover:bg-gray-50',
                      onRowClick && 'cursor-pointer',
                      isRowSelected(row, actualIndex) && 'bg-primary-50'
                    )}
                    onClick={() => onRowClick?.(row)}
                  >
                    {selectable && (
                      <td className="w-12 px-4 py-3">
                        <Checkbox
                          checked={isRowSelected(row, actualIndex)}
                          onCheckedChange={(checked) =>
                            handleSelectRow(row, actualIndex, checked === true)
                          }
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Select row"
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={column.id} className="px-4 py-3 align-middle text-gray-900">
                        {column.cell
                          ? column.cell(row)
                          : column.accessorKey
                          ? String(row[column.accessorKey] ?? '')
                          : null}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Rows per page</span>
          <Select
            value={String(currentPageSize)}
            onValueChange={(value) => {
              setCurrentPageSize(Number(value));
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages || 1}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage >= totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage >= totalPages}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const DataTable = React.forwardRef(DataTableInner) as <T>(
  props: DataTableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof DataTableInner>;

export { DataTable };
