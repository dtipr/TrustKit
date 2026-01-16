import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ProgressSegment {
  value: number;
  color: string;
  label?: string;
}

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  segments: ProgressSegment[];
  showLabels?: boolean;
  height?: 'sm' | 'md' | 'lg';
}

const heightClasses = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ segments, showLabels = false, height = 'md', className, ...props }, ref) => {
    const total = segments.reduce((sum, seg) => sum + seg.value, 0);

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className={cn('flex w-full overflow-hidden rounded-full bg-gray-100', heightClasses[height])}>
          {segments.map((segment, index) => {
            const percentage = total > 0 ? (segment.value / total) * 100 : 0;
            return (
              <div
                key={index}
                className={cn('transition-all', segment.color)}
                style={{ width: `${percentage}%` }}
              />
            );
          })}
        </div>
        {showLabels && (
          <div className="mt-2 flex flex-wrap gap-4">
            {segments.map((segment, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                <span className={cn('h-2 w-2 rounded-full', segment.color)} />
                <span>{segment.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);
ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
