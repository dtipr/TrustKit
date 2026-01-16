import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Primitives/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: 'today', label: 'Today' },
      { value: 'last-7-days', label: 'Last 7 days' },
      { value: 'this-month', label: 'This month' },
      { value: 'custom', label: 'Custom' },
    ],
    value: 'last-7-days',
  },
};

export const Small: Story = {
  args: {
    options: [
      { value: 'today', label: 'Today' },
      { value: 'last-7-days', label: 'Last 7 days' },
      { value: 'this-month', label: 'This month' },
      { value: 'custom', label: 'Custom' },
    ],
    value: 'last-7-days',
    size: 'sm',
  },
};

export const ViewToggle: Story = {
  args: {
    options: [
      { value: 'grid', label: 'Grid' },
      { value: 'list', label: 'List' },
    ],
    value: 'grid',
  },
};

export const StatusFilter: Story = {
  args: {
    options: [
      { value: 'all', label: 'All' },
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' },
    ],
    value: 'all',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState('last-7-days');
    return (
      <div className="space-y-4">
        <ButtonGroup
          options={[
            { value: 'today', label: 'Today' },
            { value: 'last-7-days', label: 'Last 7 days' },
            { value: 'this-month', label: 'This month' },
            { value: 'custom', label: 'Custom' },
          ]}
          value={value}
          onChange={setValue}
        />
        <p className="text-sm text-gray-500">Selected: {value}</p>
      </div>
    );
  },
};
