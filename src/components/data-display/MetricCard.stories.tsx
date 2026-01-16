import type { Meta, StoryObj } from '@storybook/react';
import { FileText, Send, Eye, MessageSquare, Shield, Users, Activity } from 'lucide-react';
import { MetricCard, SingleMetric } from './MetricCard';

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

export const WithTitle: Story = {
  args: {
    title: 'Initiation',
    metrics: [
      { icon: FileText, label: 'Drafted', value: 134, change: 28 },
      { icon: Send, label: 'Sent', value: 120, change: 22 },
    ],
  },
};

export const Engagement: Story = {
  args: {
    title: 'Engagement',
    metrics: [
      { icon: Eye, label: 'Opened', value: 102, change: 9 },
      { icon: MessageSquare, label: 'Replied', value: 45 },
    ],
  },
};

export const WithoutTitle: Story = {
  args: {
    metrics: [
      { icon: Shield, label: 'Certificates', value: '2,350', change: 125 },
      { icon: Users, label: 'Users', value: '1,234', change: -52 },
      { icon: Activity, label: 'API Calls', value: '45K', change: 81 },
    ],
  },
};

export const SingleMetricOnly: Story = {
  args: {
    metrics: [
      { icon: Shield, label: 'Active Certificates', value: '2,350', change: 125 },
    ],
  },
};

export const NegativeChange: Story = {
  args: {
    title: 'Performance',
    metrics: [
      { label: 'Errors', value: 23, change: -15 },
      { label: 'Warnings', value: 156, change: 8 },
    ],
  },
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4" style={{ width: '800px' }}>
      <MetricCard
        title="Initiation"
        metrics={[
          { icon: FileText, label: 'Drafted', value: 134, change: 28 },
          { icon: Send, label: 'Sent', value: 120, change: 22 },
        ]}
      />
      <MetricCard
        title="Engagement"
        metrics={[
          { icon: Eye, label: 'Opened', value: 102, change: 9 },
          { icon: MessageSquare, label: 'Replied', value: 45 },
        ]}
      />
    </div>
  ),
};

export const SingleMetricComponent: Story = {
  render: () => (
    <div className="flex gap-8">
      <SingleMetric icon={FileText} label="Drafted" value={134} change={28} />
      <SingleMetric icon={Send} label="Sent" value={120} change={22} />
      <SingleMetric icon={Eye} label="Opened" value={102} change={9} />
    </div>
  ),
};
