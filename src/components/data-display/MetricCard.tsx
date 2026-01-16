import * as React from 'react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface MetricProps {
  icon?: LucideIcon;
  label: string;
  value: string | number;
  change?: number;
  iconClassName?: string;
}

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  metrics: MetricProps[];
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, title, metrics, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rounded-lg border border-gray-200 bg-white p-4', className)}
        {...props}
      >
        {title && (
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex-1">
                <p className="mb-1 text-xs text-gray-500">{metric.label}</p>
                <div className="flex items-center gap-2">
                  {Icon && (
                    <Icon className={cn('h-4 w-4 text-gray-400', metric.iconClassName)} />
                  )}
                  <span className="text-xl font-semibold text-gray-900">{metric.value}</span>
                  {metric.change !== undefined && (
                    <span
                      className={cn(
                        'inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium',
                        metric.change >= 0
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      )}
                    >
                      {metric.change >= 0 ? '+' : ''}{metric.change}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-gray-400">vs last period</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
MetricCard.displayName = 'MetricCard';

// Single metric display (simpler version)
export interface SingleMetricProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const SingleMetric = React.forwardRef<HTMLDivElement, SingleMetricProps>(
  (
    {
      className,
      icon: Icon,
      label,
      value,
      change,
      changeLabel = 'vs last period',
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        <p className="mb-1 text-xs text-gray-500">{label}</p>
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-gray-400" />}
          <span className="text-xl font-semibold text-gray-900">{value}</span>
          {change !== undefined && (
            <span
              className={cn(
                'inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium',
                change >= 0
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              )}
            >
              {change >= 0 ? '+' : ''}{change}
            </span>
          )}
        </div>
        {changeLabel && <p className="mt-1 text-xs text-gray-400">{changeLabel}</p>}
      </div>
    );
  }
);
SingleMetric.displayName = 'SingleMetric';

export { MetricCard, SingleMetric };
