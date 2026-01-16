import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Data Display/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: [
        'active',
        'inactive',
        'pending',
        'opened',
        'replied',
        'ignored',
        'booked',
        'expired',
        'revoked',
        'valid',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    status: 'active',
  },
};

export const Inactive: Story = {
  args: {
    status: 'inactive',
  },
};

export const Pending: Story = {
  args: {
    status: 'pending',
  },
};

export const Opened: Story = {
  args: {
    status: 'opened',
  },
};

export const Replied: Story = {
  args: {
    status: 'replied',
  },
};

export const Ignored: Story = {
  args: {
    status: 'ignored',
  },
};

export const Booked: Story = {
  args: {
    status: 'booked',
  },
};

export const Expired: Story = {
  args: {
    status: 'expired',
  },
};

export const Revoked: Story = {
  args: {
    status: 'revoked',
  },
};

export const Valid: Story = {
  args: {
    status: 'valid',
  },
};

export const CustomLabel: Story = {
  args: {
    status: 'active',
    children: 'Custom Label',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge status="active" />
      <StatusBadge status="inactive" />
      <StatusBadge status="pending" />
      <StatusBadge status="opened" />
      <StatusBadge status="replied" />
      <StatusBadge status="ignored" />
      <StatusBadge status="booked" />
      <StatusBadge status="expired" />
      <StatusBadge status="revoked" />
      <StatusBadge status="valid" />
    </div>
  ),
};

export const CertificateStatuses: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-muted-foreground">Certificate:</span>
        <StatusBadge status="valid" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-muted-foreground">Certificate:</span>
        <StatusBadge status="expired" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-muted-foreground">Certificate:</span>
        <StatusBadge status="revoked" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-muted-foreground">Certificate:</span>
        <StatusBadge status="pending" />
      </div>
    </div>
  ),
};
