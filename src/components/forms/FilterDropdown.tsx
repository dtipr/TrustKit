import * as React from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../../utils/cn';
import { Button } from '../primitives/Button';
import { Input } from '../primitives/Input';

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
  className?: string;
  disabled?: boolean;
}

const FilterDropdown = React.forwardRef<HTMLButtonElement, FilterDropdownProps>(
  (
    {
      label,
      options,
      value = [],
      onChange,
      searchable = true,
      searchPlaceholder = 'Search...',
      className,
      disabled = false,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');

    const filteredOptions = React.useMemo(() => {
      if (!search) return options;
      return options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
      );
    }, [options, search]);

    const handleToggle = (optionValue: string) => {
      const newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];
      onChange?.(newValue);
    };

    const handleSelectAll = () => {
      onChange?.(options.map((opt) => opt.value));
    };

    const handleClearAll = () => {
      onChange?.([]);
    };

    const displayLabel = React.useMemo(() => {
      if (value.length === 0) return label;
      if (value.length === 1) {
        const selected = options.find((opt) => opt.value === value[0]);
        return selected?.label || label;
      }
      return `${label} (${value.length})`;
    }, [label, options, value]);

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              'justify-between font-normal',
              value.length > 0 && 'border-primary-500',
              className
            )}
          >
            {displayLabel}
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="z-50 min-w-[200px] rounded-md border bg-background shadow-md"
            align="start"
            sideOffset={4}
          >
            {searchable && (
              <div className="border-b p-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="h-8 pl-8"
                  />
                </div>
              </div>
            )}
            <div className="max-h-[300px] overflow-y-auto p-1">
              {filteredOptions.length === 0 ? (
                <p className="py-4 text-center text-sm text-muted-foreground">
                  No results found
                </p>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = value.includes(option.value);
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleToggle(option.value)}
                      className={cn(
                        'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-muted',
                        isSelected && 'bg-muted'
                      )}
                    >
                      <div
                        className={cn(
                          'flex h-4 w-4 items-center justify-center rounded-sm border',
                          isSelected
                            ? 'border-primary-500 bg-primary-500 text-white'
                            : 'border-input'
                        )}
                      >
                        {isSelected && <Check className="h-3 w-3" />}
                      </div>
                      <span className="flex-1 text-left">{option.label}</span>
                      {option.count !== undefined && (
                        <span className="text-xs text-muted-foreground">
                          {option.count}
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>
            <div className="flex items-center justify-between border-t p-2">
              <button
                onClick={handleClearAll}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Clear all
              </button>
              <button
                onClick={handleSelectAll}
                className="text-xs text-primary-600 hover:text-primary-700"
              >
                Select all
              </button>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);
FilterDropdown.displayName = 'FilterDropdown';

export { FilterDropdown };
