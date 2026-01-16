import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Forms/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const certificateTypes = [
  { value: 'dv', label: 'Domain Validated (DV)' },
  { value: 'ov', label: 'Organization Validated (OV)' },
  { value: 'ev', label: 'Extended Validation (EV)' },
  { value: 'wildcard', label: 'Wildcard' },
  { value: 'multi-domain', label: 'Multi-Domain (SAN)' },
];

export const Default: Story = {
  args: {
    options: certificateTypes,
    placeholder: 'Select certificate types...',
    className: 'w-[300px]',
  },
};

export const WithPreselected: Story = {
  render: function WithPreselectedStory() {
    const [value, setValue] = React.useState(['dv', 'wildcard']);
    return (
      <MultiSelect
        options={certificateTypes}
        value={value}
        onChange={setValue}
        placeholder="Select certificate types..."
        className="w-[300px]"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    options: certificateTypes,
    placeholder: 'Disabled',
    disabled: true,
    className: 'w-[300px]',
  },
};

export const ManyOptions: Story = {
  render: function ManyOptionsStory() {
    const [value, setValue] = React.useState<string[]>([]);
    const options = [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' },
      { value: 'in', label: 'India' },
      { value: 'br', label: 'Brazil' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
    ];

    return (
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select countries..."
        className="w-[300px]"
      />
    );
  },
};

export const StatusFilter: Story = {
  render: function StatusFilterStory() {
    const [value, setValue] = React.useState<string[]>([]);
    const options = [
      { value: 'active', label: 'Active' },
      { value: 'expired', label: 'Expired' },
      { value: 'revoked', label: 'Revoked' },
      { value: 'pending', label: 'Pending' },
    ];

    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">Filter by Status</label>
        <MultiSelect
          options={options}
          value={value}
          onChange={setValue}
          placeholder="All statuses"
          className="w-[250px]"
        />
      </div>
    );
  },
};
