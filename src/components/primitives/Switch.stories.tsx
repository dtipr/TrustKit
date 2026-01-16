import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Primitives/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Start now',
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Receive email notifications when tasks are completed',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className="space-y-4">
        <Switch
          label="Enable feature"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <p className="text-sm text-gray-500">
          Feature is {checked ? 'enabled' : 'disabled'}
        </p>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="w-80 space-y-4 rounded-lg border border-gray-200 bg-white p-4">
      <Switch label="Start now" defaultChecked />
      <Switch label="Send notifications" />
      <Switch label="Auto-save drafts" defaultChecked />
    </div>
  ),
};
