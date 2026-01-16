import * as React from 'react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  label: string;
  value: string | number;
  iconClassName?: string;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, icon: Icon, label, value, iconClassName, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-4 rounded-lg border bg-card p-4 shadow-tk-sm',
          className
        )}
        {...props}
      >
        {Icon && (
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100',
              iconClassName
            )}
          >
            <Icon className="h-6 w-6 text-primary-600" />
          </div>
        )}
        <div>
          <p className="text-2xl font-semibold">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    );
  }
);
StatCard.displayName = 'StatCard';

export { StatCard };
