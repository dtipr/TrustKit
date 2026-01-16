import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../utils/cn';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex items-center gap-6 border-b border-gray-200',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  count?: number;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, count, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative inline-flex items-center gap-2 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-primary-600',
      'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent data-[state=active]:after:bg-primary-600',
      className
    )}
    {...props}
  >
    {children}
    {count !== undefined && (
      <span className="text-gray-400 data-[state=active]:text-primary-600">
        {count}
      </span>
    )}
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus-visible:outline-none',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
