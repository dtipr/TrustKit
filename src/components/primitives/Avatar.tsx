import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const avatarVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
      },
      color: {
        gray: 'bg-gray-200 text-gray-600',
        red: 'bg-red-100 text-red-700',
        orange: 'bg-orange-100 text-orange-700',
        amber: 'bg-amber-100 text-amber-700',
        yellow: 'bg-yellow-100 text-yellow-700',
        lime: 'bg-lime-100 text-lime-700',
        green: 'bg-green-100 text-green-700',
        emerald: 'bg-emerald-100 text-emerald-700',
        teal: 'bg-teal-100 text-teal-700',
        cyan: 'bg-cyan-100 text-cyan-700',
        sky: 'bg-sky-100 text-sky-700',
        blue: 'bg-blue-100 text-blue-700',
        indigo: 'bg-indigo-100 text-indigo-700',
        violet: 'bg-violet-100 text-violet-700',
        purple: 'bg-purple-100 text-purple-700',
        fuchsia: 'bg-fuchsia-100 text-fuchsia-700',
        pink: 'bg-pink-100 text-pink-700',
        rose: 'bg-rose-100 text-rose-700',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'gray',
    },
  }
);

const colors = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose',
] as const;

function getColorFromName(name: string): typeof colors[number] {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

type AvatarColor = 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    Omit<VariantProps<typeof avatarVariants>, 'color'> {
  src?: string;
  alt?: string;
  name?: string;
  fallback?: string;
  color?: AvatarColor;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, name, fallback, size, color, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    const displayColor: AvatarColor = color || (name ? getColorFromName(name) : 'gray');
    const initials = fallback || (name ? getInitials(name) : '?');

    if (src && !imageError) {
      return (
        <div
          ref={ref}
          className={cn(avatarVariants({ size }), 'overflow-hidden', className)}
          {...props}
        >
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, color: displayColor }), className)}
        {...props}
      >
        {initials}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

export { Avatar, avatarVariants };
