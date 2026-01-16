import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../primitives/Button';
import { Input } from '../primitives/Input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>A simple card with only content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Certificate</CardTitle>
        <CardDescription>
          Generate a new SSL certificate for your domain.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="domain" className="text-sm font-medium">
              Domain
            </label>
            <Input id="domain" placeholder="example.com" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="organization" className="text-sm font-medium">
              Organization
            </label>
            <Input id="organization" placeholder="Your Company Inc." />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Generate</Button>
      </CardFooter>
    </Card>
  ),
};

export const CertificateCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">example.com</CardTitle>
          <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-700">
            Valid
          </span>
        </div>
        <CardDescription>SSL/TLS Certificate</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <dt className="text-muted-foreground">Issued</dt>
          <dd>Jan 1, 2024</dd>
          <dt className="text-muted-foreground">Expires</dt>
          <dd>Jan 1, 2025</dd>
          <dt className="text-muted-foreground">Type</dt>
          <dd>Domain Validated (DV)</dd>
        </dl>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm">
          Renew
        </Button>
        <Button variant="outline" size="sm">
          Download
        </Button>
      </CardFooter>
    </Card>
  ),
};
