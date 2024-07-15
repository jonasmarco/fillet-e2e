import type { Meta, StoryObj } from '@storybook/react';
import Logo from './index';

const meta = {
  title: 'logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
