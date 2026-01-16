import type { Meta, StoryObj } from '@storybook/react';
import {
  Shield,
  Users,
  FileCheck,
  Clock,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Data Display/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Shield,
    label: 'Total Certificates',
    value: 1234,
  },
};

export const WithUsers: Story = {
  args: {
    icon: Users,
    label: 'Active Users',
    value: 567,
  },
};

export const WithFile: Story = {
  args: {
    icon: FileCheck,
    label: 'Signed Documents',
    value: '2,345',
  },
};

export const WithClock: Story = {
  args: {
    icon: Clock,
    label: 'Pending Requests',
    value: 23,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: 'Total Items',
    value: 999,
  },
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <StatCard icon={Shield} label="Active Certificates" value="1,234" />
      <StatCard icon={Clock} label="Expiring Soon" value="23" />
      <StatCard icon={AlertTriangle} label="Expired" value="5" />
      <StatCard icon={CheckCircle} label="Issued Today" value="12" />
    </div>
  ),
};

export const PKIDashboard: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={Shield}
        label="SSL Certificates"
        value="456"
        className="border-l-4 border-l-primary-500"
      />
      <StatCard
        icon={FileCheck}
        label="Code Signing"
        value="89"
        className="border-l-4 border-l-info-500"
      />
      <StatCard
        icon={Users}
        label="S/MIME Certificates"
        value="234"
        className="border-l-4 border-l-warning-500"
      />
      <StatCard
        icon={AlertTriangle}
        label="Needs Attention"
        value="12"
        className="border-l-4 border-l-destructive-500"
      />
    </div>
  ),
};
