import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const tagVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-700',
        primary: 'bg-primary-100 text-primary-700',
        blue: 'bg-blue-100 text-blue-700',
        purple: 'bg-purple-100 text-purple-700',
        pink: 'bg-pink-100 text-pink-700',
        orange: 'bg-orange-100 text-orange-700',
        green: 'bg-green-100 text-green-700',
        red: 'bg-red-100 text-red-700',
        yellow: 'bg-yellow-100 text-yellow-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  dot?: boolean;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, dot = false, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant }), className)}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              variant === 'primary' && 'bg-primary-500',
              variant === 'blue' && 'bg-blue-500',
              variant === 'purple' && 'bg-purple-500',
              variant === 'pink' && 'bg-pink-500',
              variant === 'orange' && 'bg-orange-500',
              variant === 'green' && 'bg-green-500',
              variant === 'red' && 'bg-red-500',
              variant === 'yellow' && 'bg-yellow-500',
              (!variant || variant === 'default') && 'bg-gray-500'
            )}
          />
        )}
        {children}
      </span>
    );
  }
);
Tag.displayName = 'Tag';

export { Tag, tagVariants };
