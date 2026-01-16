import * as React from 'react';
import { Search, type LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'default', icon: Icon, iconPosition = 'left', ...props }, ref) => {
    const baseClasses = 'flex h-10 w-full rounded-lg border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50';

    if (variant === 'search') {
      return (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type={type}
            className={cn(baseClasses, 'pl-10 pr-3 py-2', className)}
            ref={ref}
            {...props}
          />
        </div>
      );
    }

    if (Icon) {
      return (
        <div className="relative">
          <Icon
            className={cn(
              'absolute top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400',
              iconPosition === 'left' ? 'left-3' : 'right-3'
            )}
          />
          <input
            type={type}
            className={cn(
              baseClasses,
              iconPosition === 'left' ? 'pl-10 pr-3' : 'pl-3 pr-10',
              'py-2',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(baseClasses, 'px-3 py-2', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
