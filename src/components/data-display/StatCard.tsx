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
          'flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3',
          className
        )}
        {...props}
      >
        {Icon && (
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50',
              iconClassName
            )}
          >
            <Icon className="h-5 w-5 text-gray-500" />
          </div>
        )}
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    );
  }
);
StatCard.displayName = 'StatCard';

export { StatCard };
