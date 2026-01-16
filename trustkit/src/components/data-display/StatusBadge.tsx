import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const statusBadgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      status: {
        active: 'bg-primary-100 text-primary-700',
        inactive: 'bg-destructive-100 text-destructive-700',
        pending: 'bg-warning-100 text-warning-700',
        opened: 'bg-info-100 text-info-700',
        replied: 'bg-primary-100 text-primary-700',
        ignored: 'bg-gray-100 text-gray-700',
        booked: 'bg-primary-100 text-primary-700',
        expired: 'bg-destructive-100 text-destructive-700',
        revoked: 'bg-destructive-100 text-destructive-700',
        valid: 'bg-primary-100 text-primary-700',
      },
    },
    defaultVariants: {
      status: 'active',
    },
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  children?: React.ReactNode;
}

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, status, children, ...props }, ref) => {
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

    return (
      <span
        ref={ref}
        className={cn(statusBadgeVariants({ status }), className)}
        {...props}
      >
        {children || statusLabels[status || 'active']}
      </span>
    );
  }
);
StatusBadge.displayName = 'StatusBadge';

export { StatusBadge, statusBadgeVariants };
