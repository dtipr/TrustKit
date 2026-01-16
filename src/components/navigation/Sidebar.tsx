import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '../../utils/cn';

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
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
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
      showSearch = true,
      searchPlaceholder = 'Search',
      onSearch,
      ...props
    },
    ref
  ) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
      <aside
        ref={ref}
        className={cn(
          'flex h-full flex-col bg-slate-900 text-white transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          className
        )}
        {...props}
      >
        {/* Logo */}
        {logo && (
          <div className="flex items-center gap-3 px-4 py-4">
            {logo}
          </div>
        )}

        {/* User Profile */}
        {user && (
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-600 text-sm font-medium">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <span>
                  {user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </span>
              )}
            </div>
            {!collapsed && (
              <>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium text-white">{user.name}</p>
                  <p className="truncate text-xs text-slate-400">
                    {user.email}
                  </p>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </>
            )}
          </div>
        )}

        {/* Search */}
        {showSearch && !collapsed && (
          <div className="px-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearch?.(e.target.value);
                }}
                className="w-full rounded-md border border-slate-700 bg-slate-800 py-2 pl-9 pr-12 text-sm text-white placeholder-slate-400 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-slate-600 bg-slate-700 px-1.5 py-0.5 text-[10px] text-slate-400">
                ⌘+F
              </span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-2">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              {section.title && !collapsed && (
                <h3 className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-0.5">
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

        {/* Footer */}
        {footer && !collapsed && (
          <div className="border-t border-slate-700 p-4">{footer}</div>
        )}

        {/* Collapse Toggle */}
        {onCollapsedChange && (
          <button
            onClick={() => onCollapsedChange(!collapsed)}
            className="flex h-10 items-center justify-center border-t border-slate-700 text-slate-400 hover:text-white"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        )}
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

  // Check if any child is active
  const hasActiveChild = hasChildren && item.items?.some(child =>
    child.id === activeItem || child.items?.some(grandchild => grandchild.id === activeItem)
  );

  // Auto-expand if child is active
  React.useEffect(() => {
    if (hasActiveChild) {
      setExpanded(true);
    }
  }, [hasActiveChild]);

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
          'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
          isActive
            ? 'bg-primary-600 text-white font-medium'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white',
          depth > 0 && !isActive && 'text-slate-400'
        )}
      >
        {Icon && <Icon className={cn('h-5 w-5 shrink-0', isActive ? 'text-white' : 'text-slate-400')} />}
        {!collapsed && (
          <>
            <span className="flex-1 truncate text-left">{item.label}</span>
            {item.badge !== undefined && (
              <span className={cn(
                'rounded px-1.5 py-0.5 text-xs',
                isActive ? 'bg-primary-500 text-white' : 'bg-slate-700 text-slate-300'
              )}>
                {item.badge}
              </span>
            )}
            {hasChildren && (
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  expanded && 'rotate-180'
                )}
              />
            )}
          </>
        )}
      </button>
      {hasChildren && expanded && !collapsed && (
        <ul className="mt-0.5 space-y-0.5 pl-4">
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
