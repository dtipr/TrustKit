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
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Overview</h3>
          <p className="text-sm text-muted-foreground">
            View your dashboard overview here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            View your analytics data here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Reports</h3>
          <p className="text-sm text-muted-foreground">
            View your reports here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCounts: Story = {
  render: () => (
    <Tabs defaultValue="all" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="all" count={156}>
          All
        </TabsTrigger>
        <TabsTrigger value="active" count={142}>
          Active
        </TabsTrigger>
        <TabsTrigger value="expired" count={8}>
          Expired
        </TabsTrigger>
        <TabsTrigger value="revoked" count={6}>
          Revoked
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Showing all 156 certificates
          </p>
        </div>
      </TabsContent>
      <TabsContent value="active">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Showing 142 active certificates
          </p>
        </div>
      </TabsContent>
      <TabsContent value="expired">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Showing 8 expired certificates
          </p>
        </div>
      </TabsContent>
      <TabsContent value="revoked">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Showing 6 revoked certificates
          </p>
        </div>
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
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const CertificateDetails: Story = {
  render: () => (
    <Tabs defaultValue="details" className="w-[600px]">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="chain">Certificate Chain</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
        <TabsTrigger value="usage">Usage</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <div className="rounded-lg border p-4 space-y-2">
          <h3 className="font-medium">Certificate Details</h3>
          <dl className="grid grid-cols-2 gap-2 text-sm">
            <dt className="text-muted-foreground">Common Name</dt>
            <dd>example.com</dd>
            <dt className="text-muted-foreground">Organization</dt>
            <dd>Example Inc.</dd>
            <dt className="text-muted-foreground">Valid From</dt>
            <dd>Jan 1, 2024</dd>
            <dt className="text-muted-foreground">Valid To</dt>
            <dd>Jan 1, 2025</dd>
          </dl>
        </div>
      </TabsContent>
      <TabsContent value="chain">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Certificate Chain</h3>
          <p className="text-sm text-muted-foreground mt-2">
            View the certificate chain hierarchy.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="history">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Certificate History</h3>
          <p className="text-sm text-muted-foreground mt-2">
            View certificate issuance and renewal history.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="usage">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Certificate Usage</h3>
          <p className="text-sm text-muted-foreground mt-2">
            View where this certificate is deployed.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
