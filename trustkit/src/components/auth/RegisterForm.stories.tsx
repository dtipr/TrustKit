import type { Meta, StoryObj } from '@storybook/react';
import { Lock } from 'lucide-react';
import { RegisterForm, type RegisterFormData } from './RegisterForm';

const meta: Meta<typeof RegisterForm> = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data: RegisterFormData) => console.log('Register submitted:', data),
    onLogin: () => console.log('Login clicked'),
  },
};

export const WithLogo: Story = {
  args: {
    logo: (
      <div className="flex items-center gap-2 text-primary-500">
        <Lock className="h-8 w-8" />
        <span className="text-2xl font-bold text-foreground">TrustKit</span>
      </div>
    ),
    onSubmit: (data: RegisterFormData) => console.log('Register submitted:', data),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: (data: RegisterFormData) => console.log('Register submitted:', data),
  },
};

export const WithError: Story = {
  args: {
    error: 'An account with this email already exists.',
    onSubmit: (data: RegisterFormData) => console.log('Register submitted:', data),
  },
};

export const WithoutOrganization: Story = {
  args: {
    showOrganization: false,
    onSubmit: (data: RegisterFormData) => console.log('Register submitted:', data),
  },
};

export const CustomTitles: Story = {
  args: {
    title: 'Get started with PKI',
    description: 'Create your account to manage certificates',
    onSubmit: (data: RegisterFormData) => console.log('Register submitted:', data),
  },
};

export const KeystoneBranded: Story = {
  args: {
    logo: (
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500">
          <Lock className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold">Keystone</span>
      </div>
    ),
    title: 'Create your account',
    description: 'Start managing your PKI infrastructure',
    onSubmit: (data: RegisterFormData) => console.log('Register submitted:', data),
    onLogin: () => console.log('Login'),
    termsLink: '/terms',
    privacyLink: '/privacy',
  },
};
