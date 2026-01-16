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

export const WithoutIcon: Story = {
  args: {
    status: 'active',
    showIcon: false,
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

export const InTable: Story = {
  render: () => (
    <table className="text-sm">
      <tbody>
        <tr className="border-b">
          <td className="py-2 pr-8">Alexander James Carter</td>
          <td className="py-2 pr-8">Business Expansion Loan</td>
          <td className="py-2">
            <StatusBadge status="active" />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-8">Michael Anthony Johnson</td>
          <td className="py-2 pr-8">Social Media Campaign</td>
          <td className="py-2">
            <StatusBadge status="inactive" />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-8">Sarah Miller Olivia</td>
          <td className="py-2 pr-8">Website Redesign</td>
          <td className="py-2">
            <StatusBadge status="active" />
          </td>
        </tr>
      </tbody>
    </table>
  ),
};
