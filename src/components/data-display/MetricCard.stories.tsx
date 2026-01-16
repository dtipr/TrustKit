import type { Meta, StoryObj } from '@storybook/react';
import { Shield, Users, Activity, DollarSign } from 'lucide-react';
import { MetricCard } from './MetricCard';

const meta: Meta<typeof MetricCard> = {
  title: 'Data Display/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: {
    icon: Shield,
    label: 'Total Certificates',
    value: '2,350',
    change: 12.5,
    changeLabel: 'vs last month',
  },
};

export const Negative: Story = {
  args: {
    icon: Users,
    label: 'Active Users',
    value: '1,234',
    change: -5.2,
    changeLabel: 'vs last month',
  },
};

export const Neutral: Story = {
  args: {
    icon: Activity,
    label: 'API Calls',
    value: '45,678',
    change: 0,
    changeLabel: 'vs last week',
  },
};

export const NoChange: Story = {
  args: {
    icon: DollarSign,
    label: 'Revenue',
    value: '$12,450',
  },
};

export const WithoutIcon: Story = {
  args: {
    label: 'Certificates Issued',
    value: '156',
    change: 23,
  },
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        icon={Shield}
        label="Active Certificates"
        value="2,350"
        change={12.5}
        changeLabel="vs last month"
      />
      <MetricCard
        icon={Users}
        label="Active Users"
        value="1,234"
        change={-5.2}
        changeLabel="vs last month"
      />
      <MetricCard
        icon={Activity}
        label="API Requests"
        value="45.2K"
        change={8.1}
        changeLabel="vs last week"
      />
      <MetricCard
        icon={DollarSign}
        label="Revenue"
        value="$24,500"
        change={15.3}
        changeLabel="vs last month"
      />
    </div>
  ),
};

export const PKIMetrics: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <MetricCard
        label="Certificates Issued"
        value="156"
        change={23}
        changeLabel="this month"
      />
      <MetricCard
        label="Certificates Revoked"
        value="3"
        change={-50}
        changeLabel="vs last month"
        trend="up"
      />
      <MetricCard
        label="Renewal Rate"
        value="94%"
        change={2.1}
        changeLabel="vs last quarter"
      />
    </div>
  ),
};
