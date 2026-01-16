import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  ChevronLeft,
  LayoutGrid,
  Target,
  Clock,
  FolderKanban,
  Download,
  UserPlus,
  MoreHorizontal,
  User,
  Calendar,
  Briefcase,
  Building2,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  TagIcon,
  TrendingUp,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../primitives/Button';
import { Avatar } from '../primitives/Avatar';
import { StatusBadge } from '../data-display/StatusBadge';
import { Tag } from '../primitives/Tag';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../navigation/Tabs';
import { Card, CardHeader, CardTitle, CardContent } from '../data-display/Card';
import { ProgressBar } from '../data-display/ProgressBar';

const meta: Meta = {
  title: 'Examples/EmployeeDashboard',
};

export default meta;

// Info row component
const InfoRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <Icon className="h-3.5 w-3.5" />
      <span>{label}</span>
    </div>
    <p className="text-sm font-medium text-gray-900 pl-5.5">{value}</p>
  </div>
);

// Simple area chart placeholder (in production, use a chart library)
const AreaChart = () => (
  <div className="relative h-32 w-full">
    <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 Q50,70 100,60 T200,40 T300,50 T400,30 L400,100 L0,100 Z"
        fill="url(#chartGradient)"
      />
      <path
        d="M0,80 Q50,70 100,60 T200,40 T300,50 T400,30"
        fill="none"
        stroke="#818cf8"
        strokeWidth="2"
      />
    </svg>
    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 pt-2">
      <span>Jan</span>
      <span>Feb</span>
      <span>Mar</span>
      <span>Apr</span>
      <span>May</span>
      <span>Jun</span>
    </div>
  </div>
);

export const EmployeePerformance: StoryObj = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('overview');
    const [infoTab, setInfoTab] = React.useState('basic');

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <div className="border-b border-gray-200 bg-white px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <ChevronLeft className="h-4 w-4" />
                Back
              </button>
              <nav className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Dashboard</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500">...</span>
                <span className="text-gray-400">/</span>
                <span className="font-medium text-gray-900">Leslie Alexander</span>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-500">
                <span>Insert command or search text</span>
                <kbd className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">⌘+F</kbd>
              </div>
              <button className="relative rounded-lg p-2 hover:bg-gray-100">
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="border-b border-gray-200 bg-white px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Employee Performance</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your employee performance and professional development
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <Avatar name="John Doe" size="sm" className="ring-2 ring-white" />
                <Avatar name="Jane Smith" size="sm" className="ring-2 ring-white" />
                <Avatar name="Bob Wilson" size="sm" className="ring-2 ring-white" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-600 ring-2 ring-white">
                  +2
                </div>
              </div>
              <Button variant="primary" size="sm">
                <UserPlus className="mr-2 h-4 w-4" />
                Invite
              </Button>
            </div>
          </div>

          {/* Page Tabs */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-1">
              {[
                { id: 'overview', label: 'Overview', icon: LayoutGrid },
                { id: 'goals', label: 'Goals', icon: Target },
                { id: 'attendance', label: 'Attendance', icon: Clock },
                { id: 'project', label: 'Project', icon: FolderKanban },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left Column - Employee Details */}
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <CardTitle className="text-base">Employee Details</CardTitle>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                {/* Employee Header */}
                <div className="flex items-center gap-4 pb-4">
                  <Avatar name="Leslie Alexander" size="lg" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">Leslie Alexander</h3>
                      <StatusBadge status="active" />
                    </div>
                    <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="text-pink-500">♀</span> Female
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" /> 32 yrs
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Tabs */}
                <div className="border-b border-gray-100">
                  <div className="flex gap-6">
                    {['Basic information', 'Document', 'Notes'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setInfoTab(tab.toLowerCase().replace(' ', '-'))}
                        className={`border-b-2 pb-3 text-sm font-medium transition-colors ${
                          infoTab === tab.toLowerCase().replace(' ', '-') || (infoTab === 'basic' && tab === 'Basic information')
                            ? 'border-primary-500 text-primary-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <InfoRow icon={User} label="Name" value="Leslie Alexander" />
                  <InfoRow icon={Calendar} label="Date applied" value="12/06/2023" />
                  <InfoRow icon={Briefcase} label="Position" value="Sr. Project Manager" />
                  <InfoRow icon={Building2} label="Division" value="Product & Development" />
                  <InfoRow icon={CreditCard} label="Employee ID" value="EMP-20241008-007" />
                  <InfoRow icon={Mail} label="Email" value="lesliealexander@mail.com" />
                  <div className="col-span-2">
                    <InfoRow icon={MapPin} label="Address" value="9458 Main Street, Apt 58, Springfield, United States" />
                  </div>
                  <InfoRow icon={Phone} label="Phone number" value="+1 830 4824 9321" />
                </div>

                {/* Tags */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <TagIcon className="h-3.5 w-3.5" />
                    <span>Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="purple" dot>Project Manager</Tag>
                    <Tag variant="blue" dot>Product</Tag>
                    <Tag variant="green" dot>Development</Tag>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Column */}
            <div className="space-y-6">
              {/* KPI Performance */}
              <Card>
                <CardHeader className="flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-gray-500" />
                    <CardTitle className="text-base">KPI performance</CardTitle>
                  </div>
                  <Button variant="outline" size="sm">
                    Last 6 months
                    <ChevronLeft className="ml-2 h-4 w-4 rotate-[-90deg]" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">90.75%</span>
                      <span className="text-sm font-medium text-green-600">+20% vs last month</span>
                    </div>
                  </div>
                  <AreaChart />
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader className="flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-gray-500" />
                    <CardTitle className="text-base">Recent activity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Total time worked</p>
                    <p className="text-xl font-semibold text-gray-900">12 hours 27 minutes</p>
                  </div>
                  <ProgressBar
                    segments={[
                      { value: 30, color: 'bg-amber-400', label: 'Pause Time' },
                      { value: 50, color: 'bg-indigo-500', label: 'Active Time' },
                      { value: 20, color: 'bg-orange-400', label: 'Extra Time' },
                    ]}
                    height="lg"
                    showLabels
                  />
                </CardContent>
              </Card>

              {/* Project Completion */}
              <Card>
                <CardHeader className="flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gray-500" />
                    <CardTitle className="text-base">Project completion</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Total projects completed</p>
                  <p className="text-2xl font-bold text-gray-900">31 Projects</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Section - Attendance Overview */}
          <Card className="mt-6">
            <CardHeader className="flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <CardTitle className="text-base">Attendance overview</CardTitle>
              </div>
              <Button variant="outline" size="sm">
                Last 6 months
                <ChevronLeft className="ml-2 h-4 w-4 rotate-[-90deg]" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  <span className="text-gray-600">On time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="text-gray-600">On late</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};
