import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Card, CardContent, CardHeader, CardTitle } from '../data-display/Card';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const DemoCard = ({ title }: { title: string }) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-base">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">Card content here</p>
    </CardContent>
  </Card>
);

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 'md',
    children: [
      <DemoCard key="1" title="Card 1" />,
      <DemoCard key="2" title="Card 2" />,
      <DemoCard key="3" title="Card 3" />,
      <DemoCard key="4" title="Card 4" />,
    ],
  },
};

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: 'md',
    children: [
      <DemoCard key="1" title="Card 1" />,
      <DemoCard key="2" title="Card 2" />,
      <DemoCard key="3" title="Card 3" />,
      <DemoCard key="4" title="Card 4" />,
      <DemoCard key="5" title="Card 5" />,
      <DemoCard key="6" title="Card 6" />,
    ],
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 'md',
    children: [
      <DemoCard key="1" title="Card 1" />,
      <DemoCard key="2" title="Card 2" />,
      <DemoCard key="3" title="Card 3" />,
      <DemoCard key="4" title="Card 4" />,
    ],
  },
};

export const LargeGap: Story = {
  args: {
    cols: 3,
    gap: 'lg',
    children: [
      <DemoCard key="1" title="Card 1" />,
      <DemoCard key="2" title="Card 2" />,
      <DemoCard key="3" title="Card 3" />,
    ],
  },
};

export const SmallGap: Story = {
  args: {
    cols: 3,
    gap: 'sm',
    children: [
      <DemoCard key="1" title="Card 1" />,
      <DemoCard key="2" title="Card 2" />,
      <DemoCard key="3" title="Card 3" />,
    ],
  },
};
