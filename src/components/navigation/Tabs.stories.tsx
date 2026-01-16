import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="accounts" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="opportunities" count={40}>
          Opportunities
        </TabsTrigger>
        <TabsTrigger value="accounts" count={40}>
          Accounts
        </TabsTrigger>
        <TabsTrigger value="contacts">Contacts</TabsTrigger>
        <TabsTrigger value="leads" count={21}>
          Leads
        </TabsTrigger>
      </TabsList>
      <TabsContent value="opportunities">
        <div className="py-4">
          <p className="text-sm text-gray-500">
            Showing all 40 opportunities
          </p>
        </div>
      </TabsContent>
      <TabsContent value="accounts">
        <div className="py-4">
          <p className="text-sm text-gray-500">Showing all 40 accounts</p>
        </div>
      </TabsContent>
      <TabsContent value="contacts">
        <div className="py-4">
          <p className="text-sm text-gray-500">Showing all contacts</p>
        </div>
      </TabsContent>
      <TabsContent value="leads">
        <div className="py-4">
          <p className="text-sm text-gray-500">Showing 21 leads</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithoutCounts: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="py-4">Overview content</div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="py-4">Analytics content</div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="py-4">Reports content</div>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team" disabled>
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="py-4">Account settings</div>
      </TabsContent>
      <TabsContent value="password">
        <div className="py-4">Password settings</div>
      </TabsContent>
    </Tabs>
  ),
};
