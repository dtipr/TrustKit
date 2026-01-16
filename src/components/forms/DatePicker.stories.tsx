import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select a date',
  },
};

export const WithValue: Story = {
  render: function WithValueStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <DatePicker value={date} onChange={setDate} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const CustomFormat: Story = {
  render: function CustomFormatStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        formatStr="dd/MM/yyyy"
        placeholder="DD/MM/YYYY"
      />
    );
  },
};

export const CertificateExpiry: Story = {
  render: function CertificateExpiryStory() {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">Certificate Expiry Date</label>
        <DatePicker
          value={date}
          onChange={setDate}
          placeholder="Select expiry date"
        />
      </div>
    );
  },
};
