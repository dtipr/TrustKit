import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../primitives/Button';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  href?: string;
  badge?: string | number;
  items?: SidebarItem[];
}

export interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

export interface SidebarUserProfile {
  name: string;
  email: string;
  avatar?: string;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  sections: SidebarSection[];
  user?: SidebarUserProfile;
  activeItem?: string;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  onItemClick?: (item: SidebarItem) => void;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      sections,
      user,
      activeItem,
      collapsed = false,
      onCollapsedChange,
      onItemClick,
      logo,
      footer,
      ...props
    },
    ref
  ) => {
    return (
      <aside
        ref={ref}
        className={cn(
          'flex h-full flex-col border-r bg-card transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!collapsed && logo}
          {onCollapsedChange && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onCollapsedChange(!collapsed)}
              className="h-8 w-8"
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              {section.title && !collapsed && (
                <h3 className="mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-1 px-2">
                {section.items.map((item) => (
                  <SidebarNavItem
                    key={item.id}
                    item={item}
                    activeItem={activeItem}
                    collapsed={collapsed}
                    onItemClick={onItemClick}
                  />
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* User Profile */}
        {user && (
          <div className="border-t p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-medium">
                    {user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                )}
              </div>
              {!collapsed && (
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium">{user.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        {footer && !collapsed && <div className="border-t p-4">{footer}</div>}
      </aside>
    );
  }
);
Sidebar.displayName = 'Sidebar';

interface SidebarNavItemProps {
  item: SidebarItem;
  activeItem?: string;
  collapsed: boolean;
  onItemClick?: (item: SidebarItem) => void;
  depth?: number;
}

function SidebarNavItem({
  item,
  activeItem,
  collapsed,
  onItemClick,
  depth = 0,
}: SidebarNavItemProps) {
  const [expanded, setExpanded] = React.useState(false);
  const isActive = activeItem === item.id;
  const hasChildren = item.items && item.items.length > 0;
  const Icon = item.icon;

  return (
    <li>
      <button
        onClick={() => {
          if (hasChildren) {
            setExpanded(!expanded);
          } else {
            onItemClick?.(item);
          }
        }}
        className={cn(
          'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
          isActive
            ? 'bg-primary-100 text-primary-700 font-medium'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
          depth > 0 && 'ml-6'
        )}
      >
        {Icon && <Icon className="h-5 w-5 shrink-0" />}
        {!collapsed && (
          <>
            <span className="flex-1 truncate text-left">{item.label}</span>
            {item.badge !== undefined && (
              <span className="rounded-full bg-muted-foreground/20 px-2 py-0.5 text-xs">
                {item.badge}
              </span>
            )}
            {hasChildren && (
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition-transform',
                  expanded && 'rotate-90'
                )}
              />
            )}
          </>
        )}
      </button>
      {hasChildren && expanded && !collapsed && (
        <ul className="mt-1 space-y-1">
          {item.items?.map((child) => (
            <SidebarNavItem
              key={child.id}
              item={child}
              activeItem={activeItem}
              collapsed={collapsed}
              onItemClick={onItemClick}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export { Sidebar };
