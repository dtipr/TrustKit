import * as React from 'react';
import { format, subDays, startOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { DayPicker, DateRange } from 'react-day-picker';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../../utils/cn';
import { Button } from '../primitives/Button';

export type DateRangePreset =
  | 'today'
  | 'yesterday'
  | 'last7days'
  | 'last30days'
  | 'thisWeek'
  | 'thisMonth'
  | 'custom';

export interface DateRangeFilterProps {
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  className?: string;
  disabled?: boolean;
}

const presets: { value: DateRangePreset; label: string }[] = [
  { value: 'today', label: 'Today' },
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'last7days', label: 'Last 7 days' },
  { value: 'last30days', label: 'Last 30 days' },
  { value: 'thisWeek', label: 'This week' },
  { value: 'thisMonth', label: 'This month' },
  { value: 'custom', label: 'Custom range' },
];

function getPresetRange(preset: DateRangePreset): DateRange | undefined {
  const today = new Date();
  switch (preset) {
    case 'today':
      return { from: today, to: today };
    case 'yesterday':
      const yesterday = subDays(today, 1);
      return { from: yesterday, to: yesterday };
    case 'last7days':
      return { from: subDays(today, 6), to: today };
    case 'last30days':
      return { from: subDays(today, 29), to: today };
    case 'thisWeek':
      return { from: startOfWeek(today), to: endOfWeek(today) };
    case 'thisMonth':
      return { from: startOfMonth(today), to: today };
    default:
      return undefined;
  }
}

const DateRangeFilter = React.forwardRef<HTMLButtonElement, DateRangeFilterProps>(
  ({ value, onChange, className, disabled = false }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [selectedPreset, setSelectedPreset] = React.useState<DateRangePreset>('last7days');

    const handlePresetChange = (preset: DateRangePreset) => {
      setSelectedPreset(preset);
      if (preset !== 'custom') {
        onChange?.(getPresetRange(preset));
      }
    };

    const displayValue = React.useMemo(() => {
      if (!value?.from) return 'Select date range';
      if (value.to) {
        return `${format(value.from, 'MMM d, yyyy')} - ${format(value.to, 'MMM d, yyyy')}`;
      }
      return format(value.from, 'MMM d, yyyy');
    }, [value]);

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !value && 'text-muted-foreground',
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="flex-1">{displayValue}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="z-50 rounded-md border bg-background shadow-md"
            align="start"
            sideOffset={4}
          >
            <div className="flex">
              <div className="border-r p-2">
                <div className="space-y-1">
                  {presets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => handlePresetChange(preset.value)}
                      className={cn(
                        'w-full rounded-sm px-3 py-1.5 text-left text-sm transition-colors hover:bg-muted',
                        selectedPreset === preset.value && 'bg-muted font-medium'
                      )}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
              {selectedPreset === 'custom' && (
                <div className="p-3">
                  <DayPicker
                    mode="range"
                    selected={value}
                    onSelect={(range) => onChange?.(range)}
                    numberOfMonths={2}
                    className="text-sm"
                    classNames={{
                      months: 'flex space-x-4',
                      month: 'space-y-4',
                      caption: 'flex justify-center pt-1 relative items-center',
                      caption_label: 'text-sm font-medium',
                      nav: 'space-x-1 flex items-center',
                      nav_button: cn(
                        'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted'
                      ),
                      nav_button_previous: 'absolute left-1',
                      nav_button_next: 'absolute right-1',
                      table: 'w-full border-collapse space-y-1',
                      head_row: 'flex',
                      head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
                      row: 'flex w-full mt-2',
                      cell: 'h-9 w-9 text-center text-sm p-0 relative',
                      day: cn(
                        'h-9 w-9 p-0 font-normal aria-selected:opacity-100 inline-flex items-center justify-center rounded-md text-sm transition-colors hover:bg-muted focus:bg-muted focus:outline-none'
                      ),
                      day_range_start: 'day-range-start rounded-l-md',
                      day_range_end: 'day-range-end rounded-r-md',
                      day_selected: 'bg-primary-500 text-white hover:bg-primary-600',
                      day_today: 'bg-muted text-foreground',
                      day_outside: 'text-muted-foreground opacity-50',
                      day_disabled: 'text-muted-foreground opacity-50',
                      day_range_middle: 'bg-primary-100',
                      day_hidden: 'invisible',
                    }}
                  />
                </div>
              )}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);
DateRangeFilter.displayName = 'DateRangeFilter';

export { DateRangeFilter };
