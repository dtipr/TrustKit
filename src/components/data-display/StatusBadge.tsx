import * as React from 'react';
import { Check, X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const statusBadgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
  {
    variants: {
      status: {
        active: 'bg-primary-50 text-primary-600',
        inactive: 'bg-destructive-50 text-destructive-600',
        pending: 'bg-warning-50 text-warning-600',
        opened: 'bg-info-50 text-info-600',
        replied: 'bg-primary-50 text-primary-600',
        ignored: 'bg-gray-100 text-gray-600',
        booked: 'bg-primary-50 text-primary-600',
        expired: 'bg-destructive-50 text-destructive-600',
        revoked: 'bg-destructive-50 text-destructive-600',
        valid: 'bg-primary-50 text-primary-600',
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
  showIcon?: boolean;
}

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, status, children, showIcon = true, ...props }, ref) => {
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

    const isPositive = ['active', 'replied', 'booked', 'valid', 'opened'].includes(status || 'active');

    return (
      <span
        ref={ref}
        className={cn(statusBadgeVariants({ status }), className)}
        {...props}
      >
        {showIcon && (
          isPositive ? (
            <Check className="h-3 w-3" />
          ) : (
            <X className="h-3 w-3" />
          )
        )}
        {children || statusLabels[status || 'active']}
      </span>
    );
  }
);
StatusBadge.displayName = 'StatusBadge';

export { StatusBadge, statusBadgeVariants };
