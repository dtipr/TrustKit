import type { Meta, StoryObj } from '@storybook/react';
import { Slash } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Certificates', href: '/certificates' },
      { label: 'example.com' },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Certificates', href: '/certificates' },
      { label: 'Details' },
    ],
  },
};

export const SingleLevel: Story = {
  args: {
    items: [{ label: 'Dashboard' }],
  },
};

export const WithoutHome: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile' },
    ],
    showHome: false,
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Certificates', href: '/certificates' },
      { label: 'example.com' },
    ],
    separator: <Slash className="h-4 w-4" />,
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Organization', href: '/org' },
      { label: 'Certificates', href: '/org/certificates' },
      { label: 'SSL/TLS', href: '/org/certificates/ssl' },
      { label: 'Domain Validated', href: '/org/certificates/ssl/dv' },
      { label: 'example.com' },
    ],
  },
};

export const PKINavigation: Story = {
  args: {
    items: [
      { label: 'PKI Management', href: '/pki' },
      { label: 'Certificate Authorities', href: '/pki/ca' },
      { label: 'Root CA', href: '/pki/ca/root' },
      { label: 'Details' },
    ],
  },
};
