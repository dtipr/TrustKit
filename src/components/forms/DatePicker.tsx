import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../../utils/cn';
import { Button } from '../primitives/Button';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  formatStr?: string;
}

const Calendar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DayPicker>
>(({ className, classNames, showOutsideDays = true, ...props }, ref) => {
  return (
    <div ref={ref}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('p-3', className)}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
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
          head_cell:
            'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            'h-9 w-9 p-0 font-normal aria-selected:opacity-100 inline-flex items-center justify-center rounded-md text-sm transition-colors hover:bg-muted focus:bg-muted focus:outline-none'
          ),
          day_range_end: 'day-range-end',
          day_selected:
            'bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:bg-primary-500 focus:text-white',
          day_today: 'bg-muted text-foreground',
          day_outside:
            'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
          day_disabled: 'text-muted-foreground opacity-50',
          day_range_middle:
            'aria-selected:bg-accent aria-selected:text-accent-foreground',
          day_hidden: 'invisible',
          ...classNames,
        }}
        {...props}
      />
    </div>
  );
});
Calendar.displayName = 'Calendar';

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Pick a date',
      className,
      disabled = false,
      formatStr = 'PPP',
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !value && 'text-muted-foreground',
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, formatStr) : <span>{placeholder}</span>}
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="z-50 rounded-md border bg-background p-0 shadow-md"
            align="start"
            sideOffset={4}
          >
            <Calendar
              mode="single"
              selected={value}
              onSelect={(date) => {
                onChange?.(date);
                setOpen(false);
              }}
              initialFocus
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);
DatePicker.displayName = 'DatePicker';

export { DatePicker, Calendar };
