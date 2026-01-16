import * as React from 'react';
import { X, ChevronDown, Check } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../../utils/cn';

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      value = [],
      onChange,
      placeholder = 'Select...',
      className,
      disabled = false,
      label,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);

    const selectedOptions = options.filter((opt) => value.includes(opt.value));

    const handleSelect = (optionValue: string) => {
      const newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];
      onChange?.(newValue);
    };

    const handleRemove = (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(value.filter((v) => v !== optionValue));
    };

    return (
      <div className={className}>
        {label && (
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger asChild>
            <button
              ref={ref}
              type="button"
              disabled={disabled}
              className={cn(
                'flex min-h-10 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50'
              )}
            >
              <div className="flex flex-1 flex-wrap gap-1.5">
                {selectedOptions.length === 0 ? (
                  <span className="text-gray-400">{placeholder}</span>
                ) : (
                  selectedOptions.map((option) => (
                    <span
                      key={option.value}
                      className="inline-flex items-center gap-1 rounded-md bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700"
                    >
                      {option.label}
                      <button
                        type="button"
                        onClick={(e) => handleRemove(option.value, e)}
                        className="rounded-sm text-blue-500 hover:text-blue-700 hover:bg-blue-200"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))
                )}
              </div>
              <ChevronDown className={cn('h-4 w-4 shrink-0 text-gray-400 transition-transform', open && 'rotate-180')} />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="z-50 min-w-[var(--radix-popover-trigger-width)] rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
              align="start"
              sideOffset={4}
            >
              {options.map((option) => {
                const isSelected = value.includes(option.value);
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-700 outline-none hover:bg-gray-100"
                  >
                    <div
                      className={cn(
                        'flex h-4 w-4 items-center justify-center rounded border',
                        isSelected
                          ? 'border-primary-500 bg-primary-500 text-white'
                          : 'border-gray-300 bg-white'
                      )}
                    >
                      {isSelected && <Check className="h-3 w-3" />}
                    </div>
                    {option.label}
                  </button>
                );
              })}
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    );
  }
);
MultiSelect.displayName = 'MultiSelect';

export { MultiSelect };
