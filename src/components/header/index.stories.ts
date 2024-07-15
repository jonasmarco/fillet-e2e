import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta = {
  title: 'header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
