import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  LayoutDashboard,
  Target,
  ShoppingCart,
  Package,
  Truck,
  Boxes,
  Store,
  Library,
  Sparkles,
} from 'lucide-react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const pipelineSections = [
  {
    title: 'Main Menu',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'milestone', label: 'Milestone', icon: Target },
      { id: 'orders', label: 'Orders', icon: ShoppingCart },
    ],
  },
  {
    items: [
      { id: 'order', label: 'Order', icon: ShoppingCart },
      { id: 'inventory', label: 'Inventory', icon: Package },
      { id: 'shipments', label: 'Shipments', icon: Truck },
      { id: 'supplies', label: 'Supplies', icon: Boxes },
    ],
  },
  {
    title: 'Team Management',
    items: [
      { id: 'product', label: 'Product', icon: Package },
      { id: 'sales-center', label: 'Sales Center', icon: Store },
    ],
  },
  {
    items: [
      {
        id: 'libraries',
        label: 'Libraries',
        icon: Library,
        items: [
          { id: 'sizes', label: 'Sizes' },
          { id: 'colors', label: 'Colors' },
        ],
      },
      { id: 'samples', label: 'Samples', icon: Sparkles },
    ],
  },
];

const user = {
  name: 'James Robert Wilson',
  email: 'jamjames@pipeline.id',
};

export const Default: Story = {
  args: {
    sections: pipelineSections,
    activeItem: 'sales-center',
    user,
    showSearch: true,
    searchPlaceholder: 'Search',
  },
};

export const Collapsed: Story = {
  args: {
    sections: pipelineSections,
    activeItem: 'dashboard',
    user,
    collapsed: true,
  },
};

export const Interactive: Story = {
  render: function InteractiveSidebar() {
    const [collapsed, setCollapsed] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState('sales-center');

    return (
      <Sidebar
        sections={pipelineSections}
        activeItem={activeItem}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        onItemClick={(item) => setActiveItem(item.id)}
        user={user}
        showSearch={true}
      />
    );
  },
};

export const WithNestedItems: Story = {
  args: {
    sections: pipelineSections,
    activeItem: 'sizes',
    user,
  },
};
