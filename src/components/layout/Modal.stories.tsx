import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../primitives/Button';
import { Input } from '../primitives/Input';
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Layout/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a description of the modal content.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <p>Modal content goes here.</p>
        </div>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Create Certificate</Button>
      </ModalTrigger>
      <ModalContent className="sm:max-w-[500px]">
        <ModalHeader>
          <ModalTitle>Create New Certificate</ModalTitle>
          <ModalDescription>
            Enter the details for your new SSL certificate.
          </ModalDescription>
        </ModalHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="domain" className="text-sm font-medium">
              Domain Name
            </label>
            <Input id="domain" placeholder="example.com" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="org" className="text-sm font-medium">
              Organization
            </label>
            <Input id="org" placeholder="Your Company Inc." />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Admin Email
            </label>
            <Input id="email" type="email" placeholder="admin@example.com" />
          </div>
        </div>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Create Certificate</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="destructive">Revoke Certificate</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Revoke Certificate</ModalTitle>
          <ModalDescription>
            Are you sure you want to revoke this certificate? This action cannot
            be undone.
          </ModalDescription>
        </ModalHeader>
        <div className="rounded-lg bg-destructive-50 p-4 text-sm text-destructive-700">
          <strong>Warning:</strong> Revoking this certificate will immediately
          invalidate it across all systems.
        </div>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Revoke Certificate</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

export const Large: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>View Certificate Details</Button>
      </ModalTrigger>
      <ModalContent className="sm:max-w-[700px]">
        <ModalHeader>
          <ModalTitle>Certificate Details</ModalTitle>
          <ModalDescription>example.com - SSL/TLS Certificate</ModalDescription>
        </ModalHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                Common Name
              </h4>
              <p className="text-sm">example.com</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                Organization
              </h4>
              <p className="text-sm">Example Inc.</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                Valid From
              </h4>
              <p className="text-sm">January 1, 2024</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                Valid To
              </h4>
              <p className="text-sm">January 1, 2025</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                Serial Number
              </h4>
              <p className="font-mono text-sm">
                04:AA:BB:CC:DD:EE:FF:00:11:22
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                Signature Algorithm
              </h4>
              <p className="text-sm">SHA256withRSA</p>
            </div>
          </div>
        </div>
        <ModalFooter>
          <Button variant="outline">Download</Button>
          <Button>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};
