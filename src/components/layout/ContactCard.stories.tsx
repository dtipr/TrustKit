import type { Meta, StoryObj } from '@storybook/react';
import { ContactCard } from './ContactCard';
import { Grid } from './Grid';
import { Button } from '../primitives/Button';

const meta: Meta<typeof ContactCard> = {
  title: 'Layout/ContactCard',
  component: ContactCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Corporation',
    location: 'San Francisco, CA',
    className: 'w-[320px]',
  },
};

export const WithStatus: Story = {
  args: {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    company: 'Tech Industries',
    status: 'active',
    className: 'w-[320px]',
  },
};

export const WithActions: Story = {
  args: {
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '+1 (555) 456-7890',
    company: 'Global Corp',
    status: 'pending',
    className: 'w-[320px]',
    actions: (
      <>
        <Button size="sm" variant="outline">
          Message
        </Button>
        <Button size="sm">View Profile</Button>
      </>
    ),
  },
};

export const MinimalInfo: Story = {
  args: {
    name: 'Alice Wonder',
    email: 'alice@example.com',
    className: 'w-[320px]',
  },
};

export const ContactGrid: Story = {
  render: () => (
    <Grid cols={3} gap="md">
      <ContactCard
        name="John Doe"
        email="john@example.com"
        company="Acme Corp"
        status="active"
      />
      <ContactCard
        name="Jane Smith"
        email="jane@example.com"
        company="Tech Inc"
        status="replied"
      />
      <ContactCard
        name="Bob Johnson"
        email="bob@example.com"
        company="Global Ltd"
        status="pending"
      />
      <ContactCard
        name="Alice Wonder"
        email="alice@example.com"
        company="Wonder Labs"
        status="booked"
      />
      <ContactCard
        name="Charlie Brown"
        email="charlie@example.com"
        company="Peanuts Inc"
        status="opened"
      />
      <ContactCard
        name="Diana Prince"
        email="diana@example.com"
        company="Amazon Corp"
        status="ignored"
      />
    </Grid>
  ),
};

export const CertificateAdmin: Story = {
  render: () => (
    <ContactCard
      name="Sarah Tech Lead"
      email="sarah@keystone.com"
      phone="+1 (555) PKI-LEAD"
      company="Keystone Security"
      location="New York, NY"
      status="active"
      className="w-[320px]"
      actions={
        <>
          <Button size="sm" variant="outline">
            Assign Cert
          </Button>
          <Button size="sm">Manage</Button>
        </>
      }
    />
  ),
};
