import * as React from 'react';
import { TrendingUp, TrendingDown, Minus, type LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      className,
      icon: Icon,
      label,
      value,
      change,
      changeLabel = 'vs last period',
      trend,
      ...props
    },
    ref
  ) => {
    const determinedTrend = trend ?? (change ? (change > 0 ? 'up' : change < 0 ? 'down' : 'neutral') : undefined);

    const TrendIcon = determinedTrend === 'up' ? TrendingUp : determinedTrend === 'down' ? TrendingDown : Minus;

    const trendColor =
      determinedTrend === 'up'
        ? 'text-primary-600'
        : determinedTrend === 'down'
        ? 'text-destructive-600'
        : 'text-muted-foreground';

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border bg-card p-6 shadow-tk-sm',
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
        </div>
        <div className="mt-2">
          <p className="text-3xl font-semibold">{value}</p>
        </div>
        {change !== undefined && (
          <div className="mt-2 flex items-center gap-1">
            <TrendIcon className={cn('h-4 w-4', trendColor)} />
            <span className={cn('text-sm font-medium', trendColor)}>
              {change > 0 ? '+' : ''}
              {change}%
            </span>
            <span className="text-sm text-muted-foreground">{changeLabel}</span>
          </div>
        )}
      </div>
    );
  }
);
MetricCard.displayName = 'MetricCard';

export { MetricCard };
