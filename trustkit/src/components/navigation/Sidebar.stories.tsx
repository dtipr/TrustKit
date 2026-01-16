import type { Meta, StoryObj } from '@storybook/react';
import {
  LayoutDashboard,
  Shield,
  FileKey,
  Users,
  Settings,
  HelpCircle,
  Building,
  Lock,
  Mail,
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

const defaultSections = [
  {
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Certificates',
    items: [
      { id: 'ssl', label: 'SSL/TLS', icon: Shield, badge: 156 },
      { id: 'code-signing', label: 'Code Signing', icon: FileKey, badge: 23 },
      { id: 'smime', label: 'S/MIME', icon: Mail, badge: 45 },
    ],
  },
  {
    title: 'Management',
    items: [
      { id: 'users', label: 'Users', icon: Users },
      { id: 'organizations', label: 'Organizations', icon: Building },
      { id: 'settings', label: 'Settings', icon: Settings },
    ],
  },
  {
    items: [
      { id: 'help', label: 'Help & Support', icon: HelpCircle },
    ],
  },
];

const user = {
  name: 'John Doe',
  email: 'john@example.com',
};

export const Default: Story = {
  args: {
    sections: defaultSections,
    activeItem: 'dashboard',
  },
};

export const WithUser: Story = {
  args: {
    sections: defaultSections,
    activeItem: 'ssl',
    user,
  },
};

export const Collapsed: Story = {
  args: {
    sections: defaultSections,
    activeItem: 'dashboard',
    collapsed: true,
  },
};

export const WithNestedItems: Story = {
  args: {
    sections: [
      {
        items: [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        ],
      },
      {
        title: 'Certificates',
        items: [
          {
            id: 'ssl',
            label: 'SSL/TLS',
            icon: Shield,
            items: [
              { id: 'ssl-dv', label: 'Domain Validated' },
              { id: 'ssl-ov', label: 'Organization Validated' },
              { id: 'ssl-ev', label: 'Extended Validation' },
            ],
          },
          { id: 'code-signing', label: 'Code Signing', icon: FileKey },
        ],
      },
    ],
    activeItem: 'ssl-dv',
    user,
  },
};

export const WithLogo: Story = {
  args: {
    sections: defaultSections,
    activeItem: 'dashboard',
    user,
    logo: (
      <div className="flex items-center gap-2">
        <Lock className="h-6 w-6 text-primary-500" />
        <span className="font-bold">TrustKit</span>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: function InteractiveSidebar() {
    const [collapsed, setCollapsed] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState('dashboard');

    return (
      <Sidebar
        sections={defaultSections}
        activeItem={activeItem}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        onItemClick={(item) => setActiveItem(item.id)}
        user={user}
        logo={
          <div className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary-500" />
            <span className="font-bold">TrustKit</span>
          </div>
        }
      />
    );
  },
};

import * as React from 'react';
