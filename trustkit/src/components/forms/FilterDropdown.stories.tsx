import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterDropdown } from './FilterDropdown';

const meta: Meta<typeof FilterDropdown> = {
  title: 'Forms/FilterDropdown',
  component: FilterDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const statusOptions = [
  { value: 'active', label: 'Active', count: 142 },
  { value: 'expired', label: 'Expired', count: 8 },
  { value: 'revoked', label: 'Revoked', count: 6 },
  { value: 'pending', label: 'Pending', count: 12 },
];

export const Default: Story = {
  render: function DefaultStory() {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <FilterDropdown
        label="Status"
        options={statusOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithPreselected: Story = {
  render: function WithPreselectedStory() {
    const [value, setValue] = React.useState<string[]>(['active', 'pending']);
    return (
      <FilterDropdown
        label="Status"
        options={statusOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const NoSearch: Story = {
  render: function NoSearchStory() {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <FilterDropdown
        label="Status"
        options={statusOptions}
        value={value}
        onChange={setValue}
        searchable={false}
      />
    );
  },
};

export const CertificateTypeFilter: Story = {
  render: function CertificateTypeFilterStory() {
    const [value, setValue] = React.useState<string[]>([]);
    const options = [
      { value: 'dv', label: 'Domain Validated (DV)', count: 89 },
      { value: 'ov', label: 'Organization Validated (OV)', count: 45 },
      { value: 'ev', label: 'Extended Validation (EV)', count: 12 },
      { value: 'wildcard', label: 'Wildcard', count: 34 },
      { value: 'multi-domain', label: 'Multi-Domain (SAN)', count: 28 },
      { value: 'code-signing', label: 'Code Signing', count: 15 },
    ];

    return (
      <FilterDropdown
        label="Certificate Type"
        options={options}
        value={value}
        onChange={setValue}
        searchPlaceholder="Search types..."
      />
    );
  },
};

export const OrganizationFilter: Story = {
  render: function OrganizationFilterStory() {
    const [value, setValue] = React.useState<string[]>([]);
    const options = [
      { value: 'acme', label: 'Acme Corporation', count: 45 },
      { value: 'globex', label: 'Globex Industries', count: 32 },
      { value: 'initech', label: 'Initech', count: 28 },
      { value: 'umbrella', label: 'Umbrella Corp', count: 21 },
      { value: 'wayne', label: 'Wayne Enterprises', count: 18 },
      { value: 'stark', label: 'Stark Industries', count: 15 },
      { value: 'oscorp', label: 'Oscorp', count: 12 },
    ];

    return (
      <FilterDropdown
        label="Organization"
        options={options}
        value={value}
        onChange={setValue}
        searchPlaceholder="Search organizations..."
      />
    );
  },
};

export const FilterBar: Story = {
  render: function FilterBarStory() {
    const [status, setStatus] = React.useState<string[]>([]);
    const [type, setType] = React.useState<string[]>([]);
    const [org, setOrg] = React.useState<string[]>([]);

    return (
      <div className="flex gap-2">
        <FilterDropdown
          label="Status"
          options={statusOptions}
          value={status}
          onChange={setStatus}
        />
        <FilterDropdown
          label="Type"
          options={[
            { value: 'ssl', label: 'SSL/TLS', count: 120 },
            { value: 'code', label: 'Code Signing', count: 15 },
            { value: 'smime', label: 'S/MIME', count: 33 },
          ]}
          value={type}
          onChange={setType}
        />
        <FilterDropdown
          label="Organization"
          options={[
            { value: 'acme', label: 'Acme Corp', count: 45 },
            { value: 'globex', label: 'Globex', count: 32 },
          ]}
          value={org}
          onChange={setOrg}
        />
      </div>
    );
  },
};
