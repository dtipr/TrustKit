import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Truck,
  Boxes,
  BadgeCheck,
  Store,
  Palette,
  Ruler,
  FileText,
  Send,
  Eye,
  MessageSquare,
  Calendar,
  Upload,
  Download,
  Filter,
  Home,
  ChevronRight,
} from 'lucide-react';
import { Sidebar, type SidebarItem } from '../navigation/Sidebar';
import { Tabs, TabsList, TabsTrigger } from '../navigation/Tabs';
import { StatCard } from '../data-display/StatCard';
import { MetricCard } from '../data-display/MetricCard';
import { StatusBadge } from '../data-display/StatusBadge';
import { DataTable, type Column } from '../layout/DataTable';
import { Button } from '../primitives/Button';
import { ButtonGroup } from '../primitives/ButtonGroup';
import { Avatar } from '../primitives/Avatar';
import { Input } from '../primitives/Input';

const meta: Meta = {
  title: 'Examples/Dashboard',
};

export default meta;

// Account data for the table
interface Account {
  id: string;
  name: string;
  opportunity: string;
  status: 'active' | 'inactive';
  memberId: string;
}

const accountData: Account[] = [
  { id: '1', name: 'Alexander James Carter', opportunity: 'Business Expansion Loan', status: 'active', memberId: '#OM123AA' },
  { id: '2', name: 'Michael Anthony Johnson', opportunity: 'Social Media Campaign', status: 'inactive', memberId: '#AT456BB' },
  { id: '3', name: 'Sarah Miller Olivia', opportunity: 'Website Redesign', status: 'active', memberId: '#EA789CC' },
  { id: '4', name: 'Alexander Thompson Anderson', opportunity: 'CRM Implementation', status: 'inactive', memberId: '#BH101DD' },
  { id: '5', name: 'Benjamin Harrison Johnson', opportunity: 'E-commerce Setup', status: 'active', memberId: '#VJ234EE' },
  { id: '6', name: 'Christopher Taylor Richardson', opportunity: 'SEO Optimization', status: 'active', memberId: '#CT567FF' },
  { id: '7', name: 'Nicholas Thompson Peterson', opportunity: 'Lead Generation Strategy', status: 'active', memberId: '#SR890GG' },
  { id: '8', name: 'Jonathan Martinez Thompson', opportunity: 'Product Launch', status: 'inactive', memberId: '#NT102HH' },
  { id: '9', name: 'Theodore Harrison Williams', opportunity: 'Cybersecurity Audit', status: 'inactive', memberId: '#IP345II' },
  { id: '10', name: 'Elijah Robinson', opportunity: 'Branding and Rebranding', status: 'active', memberId: '#JM678JJ' },
];

const accountColumns: Column<Account>[] = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    cell: (row) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.name} size="sm" />
        <span className="font-medium text-gray-900">{row.name}</span>
      </div>
    ),
  },
  {
    id: 'opportunity',
    header: 'Opportunity',
    accessorKey: 'opportunity',
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    cell: (row) => <StatusBadge status={row.status} />,
  },
  {
    id: 'memberId',
    header: 'Member ID',
    accessorKey: 'memberId',
    cell: (row) => <span className="text-gray-500">{row.memberId}</span>,
  },
];

// Sidebar configuration
const sidebarSections = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        items: [
          { id: 'milestone', label: 'Milestone' },
          { id: 'orders', label: 'Orders' },
        ],
      },
      { id: 'order', label: 'Order', icon: ShoppingCart },
      { id: 'inventory', label: 'Inventory', icon: Package },
      { id: 'shipments', label: 'Shipments', icon: Truck },
      { id: 'supplies', label: 'Supplies', icon: Boxes },
    ],
  },
  {
    title: 'TEAM MANAGEMENT',
    items: [
      { id: 'product', label: 'Product', icon: BadgeCheck },
      { id: 'sales-center', label: 'Sales Center', icon: Store },
    ],
  },
  {
    items: [
      {
        id: 'libraries',
        label: 'Libraries',
        icon: Palette,
        items: [
          { id: 'sizes', label: 'Sizes' },
          { id: 'colors', label: 'Colors' },
        ],
      },
      { id: 'samples', label: 'Samples', icon: Ruler },
    ],
  },
];

export const AccountsPage: StoryObj = {
  render: () => {
    const [activeItem, setActiveItem] = React.useState('sales-center');
    const [selectedRows, setSelectedRows] = React.useState<Account[]>([]);

    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar
          sections={sidebarSections}
          user={{
            name: 'James Robert Wilson',
            email: 'jamjames@pipeline.id',
          }}
          activeItem={activeItem}
          onItemClick={(item: SidebarItem) => setActiveItem(item.id)}
        />
        <main className="flex-1 overflow-auto">
          {/* Breadcrumbs */}
          <div className="border-b border-gray-200 bg-white px-6 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Home className="h-4 w-4" />
              <ChevronRight className="h-4 w-4" />
              <span>Sales Center</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900">Overview</span>
            </div>
          </div>

          <div className="p-6">
            {/* Tabs */}
            <Tabs defaultValue="accounts" className="mb-6">
              <TabsList>
                <TabsTrigger value="opportunities" count={40}>Opportunities</TabsTrigger>
                <TabsTrigger value="accounts" count={40}>Accounts</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
                <TabsTrigger value="leads" count={21}>Leads</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Page Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Accounts</h1>
                <p className="text-sm text-gray-500">Manage user roles and access.</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>

            {/* Stat Cards */}
            <div className="mb-6 grid grid-cols-3 gap-4">
              <StatCard icon={Users} label="Total members" value="236" />
              <StatCard icon={Users} label="New members" value="87" />
              <StatCard icon={Users} label="Active members" value="198" />
            </div>

            {/* Filter Bar */}
            <div className="mb-4 flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                All status
              </Button>
            </div>

            {/* Data Table */}
            <DataTable
              data={accountData}
              columns={accountColumns}
              selectable
              selectedRows={selectedRows}
              onSelectionChange={setSelectedRows}
              getRowId={(row) => row.id}
            />
          </div>
        </main>
      </div>
    );
  },
};

// Metrics Dashboard
interface ReplyRow {
  id: string;
  name: string;
  email: string;
  subject: string;
  preview: string;
}

const replyData: ReplyRow[] = [
  { id: '1', name: 'Liam Anderson', email: 'liam@techify.com', subject: 'Re: Proposal for Techify', preview: 'Thanks for your interes...' },
  { id: '2', name: 'Sophia Bennett', email: 'sophia@wavelet.net', subject: 'Follow-up: Website Redesign Inquiry', preview: 'Just checking in—let m...' },
  { id: '3', name: 'Ethan Parker', email: 'ethan@innova.org', subject: 'Re: Call Summary + Next Steps', preview: "As promised, here's a q..." },
];

const replyColumns: Column<ReplyRow>[] = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    cell: (row) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.name} size="sm" />
        <div>
          <p className="font-medium text-gray-900">{row.name}</p>
          <p className="text-xs text-gray-500">{row.email}</p>
        </div>
      </div>
    ),
  },
  {
    id: 'message',
    header: 'Message',
    cell: (row) => (
      <div>
        <p className="font-medium text-gray-900">{row.subject}</p>
        <p className="text-sm text-gray-500">{row.preview}</p>
      </div>
    ),
  },
];

export const MetricsDashboard: StoryObj = {
  render: () => {
    const [dateFilter, setDateFilter] = React.useState('last-7-days');

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Search */}
        <div className="mb-6">
          <Input variant="search" placeholder="Search" className="max-w-md" />
        </div>

        {/* Date Filter Tabs */}
        <div className="mb-6 flex items-center gap-4">
          <ButtonGroup
            options={[
              { value: 'today', label: 'Today' },
              { value: 'last-7-days', label: 'Last 7 days' },
              { value: 'this-month', label: 'This month' },
              { value: 'custom', label: 'Custom' },
            ]}
            value={dateFilter}
            onChange={setDateFilter}
          />
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            1 Jan 2025 - 23 June 2025
          </Button>
        </div>

        {/* Metric Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4">
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

        {/* Recent Replies Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent replies</h2>
            <div className="flex items-center gap-3">
              <Input variant="search" placeholder="Search messages..." className="w-64" />
              <ButtonGroup
                options={[
                  { value: 'last-7-days', label: 'Last 7 days' },
                  { value: 'last-30-days', label: 'Last 30 days' },
                  { value: 'this-month', label: 'This month' },
                  { value: 'custom', label: 'Custom' },
                ]}
                value="last-7-days"
                size="sm"
              />
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <DataTable
            data={replyData}
            columns={replyColumns}
            selectable
            pageSize={5}
            getRowId={(row) => row.id}
          />
        </div>
      </div>
    );
  },
};
