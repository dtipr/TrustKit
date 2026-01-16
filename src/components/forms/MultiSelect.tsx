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
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      value = [],
      onChange,
      placeholder = 'Select items...',
      className,
      disabled = false,
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
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              'flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
          >
            <div className="flex flex-1 flex-wrap gap-1">
              {selectedOptions.length === 0 ? (
                <span className="text-muted-foreground">{placeholder}</span>
              ) : (
                selectedOptions.map((option) => (
                  <span
                    key={option.value}
                    className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
                  >
                    {option.label}
                    <button
                      type="button"
                      onClick={(e) => handleRemove(option.value, e)}
                      className="rounded-sm hover:bg-muted-foreground/20"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))
              )}
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="z-50 min-w-[var(--radix-popover-trigger-width)] rounded-md border bg-background p-1 shadow-md"
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
                  {option.label}
                </button>
              );
            })}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);
MultiSelect.displayName = 'MultiSelect';

export { MultiSelect };
