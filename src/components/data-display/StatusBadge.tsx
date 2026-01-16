import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const statusBadgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
  {
    variants: {
      status: {
        active: 'bg-green-50 text-green-700',
        inactive: 'bg-red-50 text-red-700',
        pending: 'bg-amber-50 text-amber-700',
        opened: 'bg-blue-50 text-blue-700',
        replied: 'bg-green-50 text-green-700',
        ignored: 'bg-gray-100 text-gray-600',
        booked: 'bg-green-50 text-green-700',
        expired: 'bg-red-50 text-red-700',
        revoked: 'bg-red-50 text-red-700',
        valid: 'bg-green-50 text-green-700',
      },
    },
    defaultVariants: {
      status: 'active',
    },
  }
);

const dotColors: Record<string, string> = {
  active: 'bg-green-500',
  inactive: 'bg-red-500',
  pending: 'bg-amber-500',
  opened: 'bg-blue-500',
  replied: 'bg-green-500',
  ignored: 'bg-gray-400',
  booked: 'bg-green-500',
  expired: 'bg-red-500',
  revoked: 'bg-red-500',
  valid: 'bg-green-500',
};

const statusLabels: Record<string, string> = {
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending',
  opened: 'Opened',
  replied: 'Replied',
  ignored: 'Ignored',
  booked: 'Booked',
  expired: 'Expired',
  revoked: 'Revoked',
  valid: 'Valid',
};

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  children?: React.ReactNode;
  showDot?: boolean;
}

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, status, children, showDot = true, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(statusBadgeVariants({ status }), className)}
        {...props}
      >
        {showDot && (
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              dotColors[status || 'active']
            )}
          />
        )}
        {children || statusLabels[status || 'active']}
      </span>
    );
  }
);
StatusBadge.displayName = 'StatusBadge';

export { StatusBadge, statusBadgeVariants };
