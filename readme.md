# TrustKit

A React UI component library for Keystone PKI/SSL/Identity products.

## Features

- **27+ Components** - Primitives, data display, navigation, forms, layout, and auth
- **Dark Sidebar** - Professional dark theme navigation
- **Tailwind CSS** - Utility-first styling with CSS custom properties
- **TypeScript** - Full type safety and IntelliSense
- **Storybook** - Interactive component documentation
- **Tree-shakeable** - Import only what you need

## Installation

```bash
npm install @keystone/trustkit
```

## Usage

```tsx
import { Button, StatusBadge, DataTable, Sidebar } from '@keystone/trustkit';
import '@keystone/trustkit/styles.css';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar
        sections={[
          {
            title: 'Main Menu',
            items: [
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'accounts', label: 'Accounts', icon: Users },
            ],
          },
        ]}
        user={{ name: 'John Doe', email: 'john@example.com' }}
        activeItem="dashboard"
      />
      <main className="flex-1 p-6">
        <h1>Dashboard</h1>
        <StatusBadge status="active" />
      </main>
    </div>
  );
}
```

## Components

### Primitives
- `Button` - Primary, secondary, outline, ghost, destructive variants
- `Input` - Text input with search variant
- `Textarea` - Multi-line text input
- `Checkbox` - Radix-based checkbox
- `Select` - Dropdown select with groups

### Data Display
- `StatusBadge` - Status indicators with icons (Active, Inactive, Pending, etc.)
- `StatCard` - Metric cards with icon and value
- `MetricCard` - Cards with trend indicators
- `Card` - Container component with header/footer

### Navigation
- `Sidebar` - Dark theme collapsible sidebar with search
- `Tabs` - Underlined tabs with count badges
- `Breadcrumbs` - Navigation breadcrumbs

### Forms
- `MultiSelect` - Multi-select dropdown with tags
- `DatePicker` - Calendar date picker
- `DateRangeFilter` - Date range with presets
- `FilterDropdown` - Checkbox filter with search

### Layout
- `Modal` - Dialog/modal component
- `Grid` - Responsive grid layout
- `ContactCard` - Contact information card
- `DataTable` - Sortable, paginated table with row selection
- `PageHeader` - Page title with actions

### Auth
- `LoginForm` - Complete login form
- `RegisterForm` - Registration form with validation

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run dev

# Build library
npm run build

# Type check
npm run typecheck

# Run tests
npm test
```

## Design Tokens

TrustKit uses CSS custom properties for theming:

```css
:root {
  --tk-primary-500: #22c55e;      /* Green - Trust/Security */
  --tk-destructive-500: #ef4444;  /* Red - Errors */
  --tk-warning-500: #f59e0b;      /* Amber - Warnings */
  --tk-info-500: #3b82f6;         /* Blue - Information */
}
```

## Package Exports

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    },
    "./styles.css": "./dist/styles.css"
  }
}
```

## License

MIT
