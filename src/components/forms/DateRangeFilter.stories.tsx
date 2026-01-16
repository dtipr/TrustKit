import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRange } from 'react-day-picker';
import { DateRangeFilter } from './DateRangeFilter';

const meta: Meta<typeof DateRangeFilter> = {
  title: 'Forms/DateRangeFilter',
  component: DateRangeFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultStory() {
    const [range, setRange] = React.useState<DateRange | undefined>();
    return <DateRangeFilter value={range} onChange={setRange} />;
  },
};

export const WithPreset: Story = {
  render: function WithPresetStory() {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 6);

    const [range, setRange] = React.useState<DateRange | undefined>({
      from: sevenDaysAgo,
      to: today,
    });
    return <DateRangeFilter value={range} onChange={setRange} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CertificateIssuanceFilter: Story = {
  render: function CertificateIssuanceFilterStory() {
    const [range, setRange] = React.useState<DateRange | undefined>();
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">Certificate Issuance Date</label>
        <DateRangeFilter value={range} onChange={setRange} />
      </div>
    );
  },
};
