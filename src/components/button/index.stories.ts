import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta = {
  title: 'button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
