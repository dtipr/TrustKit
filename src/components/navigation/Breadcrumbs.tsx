import * as React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHome?: boolean;
  homeHref?: string;
}

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp
      ref={ref}
      className={cn(
        'text-sm text-muted-foreground transition-colors hover:text-foreground',
        className
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      className,
      items,
      separator = <ChevronRight className="h-4 w-4" />,
      showHome = true,
      homeHref = '/',
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn('', className)}
        {...props}
      >
        <ol className="flex items-center gap-2">
          {showHome && (
            <>
              <li>
                <BreadcrumbLink href={homeHref} aria-label="Home">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </li>
              {items.length > 0 && (
                <li className="text-muted-foreground">{separator}</li>
              )}
            </>
          )}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <li>
                  {isLast ? (
                    <span
                      className="text-sm font-medium text-foreground"
                      aria-current="page"
                    >
                      {item.icon}
                      {item.label}
                    </span>
                  ) : (
                    <BreadcrumbLink href={item.href}>
                      {item.icon}
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </li>
                {!isLast && (
                  <li className="text-muted-foreground">{separator}</li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);
Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs, BreadcrumbLink };
