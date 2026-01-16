import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Primitives/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'This is some default text in the textarea.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <label htmlFor="message" className="text-sm font-medium">
        Your message
      </label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),
};

export const LargeTextarea: Story = {
  args: {
    placeholder: 'Large textarea for longer content',
    className: 'min-h-[200px]',
  },
};
