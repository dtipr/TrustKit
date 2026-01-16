import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Primitives/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    alt: 'Profile picture',
    name: 'John Doe',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar name="John Doe" size="xs" />
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="John Doe" size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Avatar name="Alice Brown" />
      <Avatar name="Bob Smith" />
      <Avatar name="Carol White" />
      <Avatar name="David Green" />
      <Avatar name="Eva Martinez" />
      <Avatar name="Frank Wilson" />
      <Avatar name="Grace Lee" />
      <Avatar name="Henry Taylor" />
    </div>
  ),
};

export const ExplicitColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Avatar name="AB" color="red" />
      <Avatar name="CD" color="orange" />
      <Avatar name="EF" color="amber" />
      <Avatar name="GH" color="green" />
      <Avatar name="IJ" color="teal" />
      <Avatar name="KL" color="blue" />
      <Avatar name="MN" color="indigo" />
      <Avatar name="OP" color="purple" />
      <Avatar name="QR" color="pink" />
    </div>
  ),
};

export const Fallback: Story = {
  args: {
    fallback: '?',
  },
};

export const InList: Story = {
  render: () => (
    <div className="space-y-3">
      {[
        { name: 'Alexander James Carter', email: 'alex@example.com' },
        { name: 'Michael Anthony Johnson', email: 'michael@example.com' },
        { name: 'Sarah Miller Olivia', email: 'sarah@example.com' },
      ].map((user) => (
        <div key={user.email} className="flex items-center gap-3">
          <Avatar name={user.name} size="sm" />
          <div>
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};
