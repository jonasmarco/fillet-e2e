import type { Meta, StoryObj } from '@storybook/react';
import Form from './index';

const meta = {
  title: 'form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
