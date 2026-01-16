import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonGroupOption {
  value: string;
  label: string;
}

export interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ButtonGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md';
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, options, value, onChange, size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 p-1',
          className
        )}
        role="group"
        {...props}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange?.(option.value)}
            className={cn(
              'rounded-md font-medium transition-all',
              size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm',
              value === option.value
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
