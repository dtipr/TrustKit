import type { Meta, StoryObj } from '@storybook/react';
import { Lock } from 'lucide-react';
import { LoginForm, type LoginFormData } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data: LoginFormData) => console.log('Login submitted:', data),
    onForgotPassword: () => console.log('Forgot password clicked'),
    onRegister: () => console.log('Register clicked'),
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
    onSubmit: (data: LoginFormData) => console.log('Login submitted:', data),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: (data: LoginFormData) => console.log('Login submitted:', data),
  },
};

export const WithError: Story = {
  args: {
    error: 'Invalid email or password. Please try again.',
    onSubmit: (data: LoginFormData) => console.log('Login submitted:', data),
  },
};

export const CustomTitles: Story = {
  args: {
    title: 'Sign in to PKI Portal',
    description: 'Access your certificate management dashboard',
    onSubmit: (data: LoginFormData) => console.log('Login submitted:', data),
  },
};

export const Minimal: Story = {
  args: {
    showRememberMe: false,
    showForgotPassword: false,
    showRegisterLink: false,
    onSubmit: (data: LoginFormData) => console.log('Login submitted:', data),
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
    title: 'Welcome back',
    description: 'Sign in to your Keystone PKI account',
    onSubmit: (data: LoginFormData) => console.log('Login submitted:', data),
    onForgotPassword: () => console.log('Forgot password'),
    onRegister: () => console.log('Register'),
  },
};
